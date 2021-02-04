const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const validateComment = require('../../validation/comment');
const Post = require('../../models/Post');

router.get("/", (req, res) => {
    Comment.find().sort({updatedAt: -1}).then(comments => res.json(comments), err => res.status(404).json({commentError: "No comments found"}));
});

router.get("/post/:post_id", (req, res) => {
    Comment.find({post: req.params.post_id}).then(comments => res.json({comments}), err => res.status(404).json({commentError: "No comments from this post"}));
});

// router.get("/creator/:creator_id", (req, res) => {
//     Comment.find({creator: req.params.creator_id}).then(comments => res.json({comments}), err => res.status(404).json({commentError: "No comments from this creator"}));
// });

router.get("/:id", (req, res) => {
    Comment.findById(req.params.id).then(comment => res.json(comment), err => res.status(404).json({commentError: "Comment does not exist"}))
});

router.patch("/:id", (req, res) => {
    Comment.findById(req.params.id).then(comment => {
        comment.content = req.body.content;
        comment.save().then(comment => res.json(comment));
    }, err => res.status(404).json({commentError: "comment does not exist"}));
});

// router.patch("/:id/liker/:user_id", (req, res) => {
//     Comment.findById(req.params.id).then(comment => {
//         User.findById(req.params.user_id).then(user => {
//             comment.likers.push(user);
//             comment.save().then(comment => res.json(comment));
//         }, err => res.status(404).json({userError: "User cannot be found"}));
//     }, err => res.status(404).json({commentError: "comment does not exist"}));
// });

router.post("/:id/liker/:user_id", (req, res) => {
    Comment.findById(req.params.id).then(comment => {
        if(comment.likers.indexOf(req.params.user_id) === -1) comment.likers.push(req.params.user_id);
        comment.save().then(comment => res.json(comment));
    }, err => res.status(404).json({commentError: "comment does not exist"}));
});

router.delete("/:id/liker/:user_id", (req, res) => {
    Comment.findById(req.params.id).then(comment => {
        const index = comment.likers.indexOf(req.params.user_id);
        if (index !== -1) comment.likers.splice(index, 1);
        
        comment.save().then(comment => res.json(comment));
    }, err => res.status(404).json({commentError: "comment does not exist"}));
});


router.post("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateComment(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newComment = new Comment({
        content: req.body.content,
        creator: req.body.creator,
        post: req.body.post
    });

    newComment.save().then(comment => {
        Post.findById(comment.post).then(post => { 
            post.comments.push(comment);
            post.save().then(post => res.json(post));
        });
    });
});

router.delete("/:id", (req,res) => {
    Comment.remove({ _id: req.params.id, }).then(() => res.json({ commentId: req.params.id}), err => res.status(404).json({commentError: "Something went wrong"}));
})

module.exports = router;