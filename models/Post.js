const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        require: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        require: true
    },
    tags: {
        type: Array
    },
    likers: {
        type: Array
    },
    comments: {
        type: Array
    }
    
}, {
    timestamps: true
})

module.exports = Post = mongoose.model('Post', PostSchema);