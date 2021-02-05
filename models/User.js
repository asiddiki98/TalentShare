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
        type: String,
        default: "89e59ed546b101b48645311b115a8834.png"
    },
    followers: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);