const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    filename: {
        type: String
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
    }
    
}, {
    timestamps: true
})

module.exports = Post = mongoose.model('Post', PostSchema);