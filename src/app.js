const express = require('express');
require("./db/conn");

const Artists = require("../src/models/artists")

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/artists", async(req, res) => {
    try{

    } catch(e) {
        
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});