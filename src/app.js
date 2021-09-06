const express = require('express');
require("./db/conn");

const Artists = require("../src/models/artists")

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json()); //we can json data from postman

app.post("/artists", async(req, res) => {
    try{
        const addingArtists = new Artists(req.body)
        console.log(req.body)
        const insertArtists = await addingArtists.save();
        res.send(insertArtists)
    } catch(e) {
        res.send(e);
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});