var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    userName: {
        type: String
    },
    userNameBoolean: {
        type: Boolean,
        default: true
    },
    firstName: {
        type: String
    },
    nameBoolean: {
        type: Boolean
    },
    age: {
        type: Number
    },
    ageBoolean: {
        type: Boolean,
    },
    bio: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);