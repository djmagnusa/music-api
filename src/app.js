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
        res.status(201).send(insertArtists)
    } catch(e) {
        res.status(400).send(e);
    }
})

app.get("/artists", async (req, res) => {
    try{
        const getArtists = await Artists.find({}).sort({"name": 1});
        res.status(201).send(getArtists);
    } catch(e) {
        res.status(400).send(e);
    }
})

app.get("/artists/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getArtist = await Artists.findById({_id:_id});
        res.send(getArtist);
    } catch(e) {
        res.status(400).send(e);
    }
})

app.patch("/artists/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getArtist = await Artists.findByIdAndUpdate({_id:_id}, req.body, {
            new: true //to see the updated data
        });
        res.send(getArtist);

    } catch(e) {
        res.status(400).send(e);
    }
})

app.delete("/artists/:id", async (req, res) => {
    try{
    
        const getArtist = await Artists.findByIdAndDelete(req.params.id);
        res.send(getArtist);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});