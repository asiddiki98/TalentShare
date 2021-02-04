const express = require('express');
const imageRouter = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/Image');
const keys = require("../config/keys");
const Grid = require("gridfs-stream");


module.exports = (upload) => {
    const url = keys.mongoURI;
    const connect = mongoose.createConnection(url, {useNewUrlParser: true, useUnifiedTopology: true});

    let gfs;

    connect.once('open', () => {
        gfs = Grid(connect.db, mongoose.mongo);
        gfs.collection('uploads');
    });

    imageRouter.route('/').post(upload.single('file'), (req, res, next) => {
        console.log(req.body);

        Image.findOne({ fileId: req.body.fileId }).then((image) => {
            console.log(image);
            if(image) {
                return res.status(200).json({
                    success: false,
                    message: 'Image already exists'
                });
            }

            let newImage = new Image({
                caption: req.body.caption,
                filename: req.file.filename,
                fileId: req.fileId
            });

            newImage.save().then((image) => {
                res.status(200).json({
                    success: true,
                    image
                });
            }, err => res.status(500).json(err))
        }, err => res.status(500).json(err))
    })


    imageRouter.route('/recent').get((req,res,next) => {
        Image.findOne({}, {}, {sort: {'_id': -1}}).then(image => {
            res.status(200).json({
                success: true,
                image
            });
        }, err => res.status(500).json(err))
    });


    imageRouter.route('/image/:filename').get((req,res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No image exists'
                });
            }

            if (file.contentType.includes("image")) {
            // if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            } else {
                res.status(404).json({
                    err: 'Not an image'
                })
            }
        })
    })

    imageRouter.route('/video/:filename').get((req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No video exists'
                });
            }

            // if (file.contentType === 'video/mp4' || file.contentType === 'video/mov') {
            if (file.contentType.includes('video')) {
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            } else {
                res.status(404).json({
                    err: 'Not an video'
                })
            }
        })
    })

    imageRouter.route('/audio/:filename').get((req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No audio exists'
                });
            }

            // if (file.contentType === 'video/mp4' || file.contentType === 'video/mov') {
            if (file.contentType.includes('audio')) {
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            } else {
                res.status(404).json({
                    err: 'Not an audio'
                })
            }
        })
    })


    return imageRouter;
}
