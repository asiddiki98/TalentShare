const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check to make sure nobody has already registered with a duplicate email
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: req.body.password
                })
                // newUser.save().then(user => res.send(user)).catch(err => res.send(err))
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = {
                                    id: user.id,
                                    username: user.username,
                                    email: user.email,
                                    firstname: user.firstname,
                                    lastname: user.lastname,
                                    bio: user.bio,
                                    propic: user.propic
                                }
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token
                                        })
                                    }
                                )
                            })
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: "this user does not exist " })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            bio: user.bio,
                            propic: user.propic
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({ password: "password incorrect" })
                    }
                })
        })
})


router.get("/:id", (req, res) => {
    User.findById(req.params.id).then(user => res.json(user), err => res.status(404).json({userError: "user does not exist"}))
});

router.get("/email/:email", (req, res) => {
    const email = req.params.email;
    User.findOne({email}).then(user => res.json(user), err => res.status(404).json({userError: "user does not exist"}))
});

// passport.authenticate('jwt', {session: false})

router.patch("/:id", (req, res) => {
    User.findById(req.params.id).then(user => {
        user.username = req.body.username;
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.bio = req.body.bio;
        user.propic = req.body.propic;
        user.save().then(user => res.json(user));
    }, err => res.status(404).json({userError: "user does not exist"}));
});

router.post("/:id/followers/:follower_id", (req, res) => {
    User.findById(req.params.id).then(user => {
        user.followers.push(req.params.follower_id);
        user.save().then(user => res.json(user));
    }, err => res.status(404).json({userError: "User does not exist"}));
});

router.get("/", (req, res) => {
    User.find().then(users => res.json(users), err => res.status(404).json({userError: "No users found"}));
});

router.post("/:id/followers/:user_id", (req, res) => {
    User.findById(req.params.id).then(user => {
        if(user.followers.indexOf(req.params.user_id) === -1) user.followers.push(req.params.user_id);
        user.save().then(user => res.json(user));
    }, err => res.status(404).json({userError: "user does not exist"}));
});

router.delete("/:id/followers/:user_id", (req, res) => {
    User.findById(req.params.id).then(user => {
        const index = user.followers.indexOf(req.params.user_id);
        if (index !== -1) user.followers.splice(index, 1);
        
        user.save().then(user => res.json(user));
    }, err => res.status(404).json({userError: "user does not exist"}));
});

module.exports = router;