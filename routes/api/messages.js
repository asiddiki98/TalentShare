const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Message = require('../../models/Message');
const jwt = require('jsonwebtoken');

router.get("/user/:user_id", passport.authenticate('jwt', {session: false}), (req,res) => {
    Message.find({ $or: [
        {sender: req.params.user_id},
        {receiver: req.params.user_id}
    ]}).then(messages => {

        res.json(messages)
    }, err => res.status(404).json({user: "No messages regarding current user"}))
})

//only used for initial messaging
router.post("/", passport.authenticate('jwt',{session: false}), (req,res) => {
    
    const newMessage = new Message({
        body: req.body.body,
        sender: req.body.sender,
        receiver: req.body.receiver,
        initialConnectingMessage: true
    })
    
    newMessage.save().then(message => res.json(message))
})

// router.post("/", passport.authenticate('jwt', {session: false}), (req,res) => {
//     const newMessage = new Message({
//         body: req.body.body,
//         sender: req.body.sender,
//         receiver: req.body.receivers
//     })

//     newMessage.save().then(message => res.json(message))
// })

module.exports = router