const express = require("express");
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artist: {
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