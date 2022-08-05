

const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
    },
    businessName: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: false,
        trim: true,
    },
    state: {
        type: String,
        required: false,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

const User = model("User", userSchema);
module.exports = User;