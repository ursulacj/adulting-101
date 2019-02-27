var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var noteSchema = new Schema ({
    title: {
        type: String,
        default: Date(),
    },
    content: {
        type: String,
        // required: true
    },
    mood: {
        type: String,
        enum: ['Happy', 'Sad', 'Other']
    },
    tag: {
        type: String,
        enum: ['Finance + Career', 'Life Skills', 'Mental Health', 'Friendship', 'Love + Relationships']
    },
    public: {
        type: Boolean
    }
    },{timestamps: true
})

module.exports = mongoose.model('Note', noteSchema);