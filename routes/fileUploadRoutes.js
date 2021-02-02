// const express = require("express");
// const router = express.Router();
// const DOCUMENT = require();
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const keys = require('../config/keys');

// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});

// router.route("/").get((req, res, next) => {
//     DOCUMENT.find(
//         {},
//         null,
//         {
//             sort: {createdAt: 1}
//         },
//         (err, docs) => {
//             if (err) {
//                 return next(err);
//             }
//             res.status(200).send(docs);
//         }
//     )
// });

// router.route('/:id').get((req,res,next) => {
//     DOCUMENT.findById(req.params.id, (err,go) => {
//         if (err) return next(err);
//         res.json(go);
//     });
// });

// router.post("/upload", upload.single("file"), function(req,res) {
//     const file = req.file:
//     const s3fileURL = keys.AWS_Uploaded_File_URL_LINK;

//     let s3Bucket = new AWS.S3({
//         accessKeyId: keys.AWS_ACCESS_KEY_ID,
//         secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
//         region: keys.AWS_REGION
//     });

//     const params = {
//         Bucket: keys.AWS_BUCKET_NAME,
//         Key: file.originalname
//     }
// })

// module.exports = router;