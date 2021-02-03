const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const jwt = require('jsonwebtoken');
const validatePost = require('../../validation/post');

router.get("/", (req, res) => {
    Post.find().sort({updatedAt: -1}).then(posts => res.json(posts), err => res.status(404).json({postError: "No posts found"}));
});

router.get("/creator/:creator_id", (req, res) => {
    Post.find({creator: req.params.creator_id}).then(posts => res.json({posts}), err => res.status(404).json({postError: "No posts from this creator"}));
});

router.get("/:id", (req, res) => {
    Post.findById(req.params.id).then(post => res.json(post), err => res.status(404).json({postError: "Post does not exist"}))
});


router.patch("/:id", (req, res) => {
    Post.findById(req.params.id).then(post => {
        post.description = req.body.description;
        post.filename = req.body.filename;
        post.category = req.body.category;
        post.tags = req.body.tags;
        post.save().then(post => res.json(post));
    }, err => res.status(404).json({postError: "Post does not exist"}));
});

router.patch("/:id/liker/:user_id", (req, res) => {
    Post.findById(req.params.id).then(post => {
        
        post.likers.push(req.params.user_id);
        post.save().then(post => res.json(post));
        // User.findById(req.params.user_id).then(user => {
        //     post.likers.push(user);
        //     post.save().then(post => res.json(post));
        // }, err => res.status(404).json({userError: "User cannot be found"}));
    }, err => res.status(404).json({postError: "Post does not exist"}));
});

router.get("/category/:category_name", (req, res) => {
    Post.find({category: req.params.category_name}).then(posts => res.json({posts}), err => res.status(404).json({postError: "No posts found under this category"}));
});


router.post("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validatePost(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        description: req.body.description,
        filename: req.body.filename,
        creator: req.body.creator,
        category: req.body.category,
        tags: req.body.tags,
    });

    newPost.save().then(post => res.json(post));
});

router.delete("/:id", (req,res) => {
    Post.remove({_id: req.params.id,}).then(() => res.json({postId: req.params.id}), err => res.status(404).json({postError: "Something went wrong"}));
})

module.exports = router;