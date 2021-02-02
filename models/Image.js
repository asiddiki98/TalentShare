const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let ImageSchema = new Schema({
    caption: {
        required: true,
        type: String
    },
    filename: {
        required: true,
        type: String
    },
    fileId: {type: Number, default: 0},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

ImageSchema.plugin(AutoIncrement, {inc_field: 'fileId'});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;