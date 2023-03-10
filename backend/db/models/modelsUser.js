const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;