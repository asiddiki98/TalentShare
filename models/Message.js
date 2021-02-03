const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    initialConnectingMessage: {
        type: Boolean,
        required: true
    }

}, {
    timestamps: true
})

module.exports = Message = mongoose.model('Message', MessageSchema);