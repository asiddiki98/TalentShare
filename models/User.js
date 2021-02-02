const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    propic: {
        type: Number
    },
    photos: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);