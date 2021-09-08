const express = require("express");
const router = new express.Router();

const Artists = require("../models/artists");

router.post("/artists", async(req, res) => {
    try{
        const addingArtists = new Artists(req.body)
        console.log(req.body)
        const insertArtists = await addingArtists.save();
        res.status(201).send(insertArtists)
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get("/artists", async (req, res) => {
    try{
        const getArtists = await Artists.find({}).sort({"name": 1});
        res.status(201).send(getArtists);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get("/artists/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const getArtist = await Artists.findById({_id:_id});
        res.send(getArtist);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.patch("/artists/:id", async (req, res) => {
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

router.delete("/artists/:id", async (req, res) => {
    try{
    
        const getArtist = await Artists.findByIdAndDelete(req.params.id);
        res.send(getArtist);
    }
    catch(e) {
        res.status(500).send(e);
    }
})


module.exports = router;