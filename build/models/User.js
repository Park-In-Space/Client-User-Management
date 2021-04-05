"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const UserSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('User', UserSchema);
