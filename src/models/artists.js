const express = require("express");
const mongoose = require("mongoose");

//structure of document
const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    members: {
        type: [String],
        trim: true
    },

    genre: {
        type: String,
        default: "rock",
        required: true,
        trim: true
    },

    songs: {
        type: [String],
        required: true,
        trim: true
    },

    lyrics: {
        type: [String],
        required: true,
        trim: true 
    }
})

//creating collection
const Artists = new mongoose.model("Artists", artistSchema)

module.exports = Artists;