const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/music-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection established")
}).catch((e) => {
    console.log("Check your connection")
})