'use-strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        requred: true
    },
    password: {
        type:String,
        required: true
    }
})

UserSchema.pre('save', (callback) => {
    let user = this;

    if(!user.isModified('password')) {
        return callback();
    }

    bcrypt.genSalt(5, (err, salt) => {
        if(err) return callback(err);

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err) {
                return callback(err);
            }
            user.password = hash;
            callback();
        })
    })
})

module.exports = mongoose.model('user', UserSchema);