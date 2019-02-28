var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var noteSchema = new Schema ({
    title: {
        type: String,
        default: "default"
    },
    content: {
        type: String,
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