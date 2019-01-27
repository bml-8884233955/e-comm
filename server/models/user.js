const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create user Schema and Model

const UserSchema = new Schema({
    fName:{
        type: String,
        required: [true, "Name Field is required"]   
    },
    lName:{
        type: String,
        required: [true, "Name Field is required"]   
    },
    available: {
        type: Boolean,
        default: false
    },
    userId:{
        type: String,
        required: [true, "User Id is required"]
    },
    pwd:{
        type: String,
        required: [true, "Password is required"]
    }
    
});

const User = mongoose.model('user', UserSchema);

module.exports = User;