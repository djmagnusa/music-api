const express = require('express');

require("./db/conn");

//const Artists = require("../src/models/artists")

const router = require("./routers/artist");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json()); //we can json data from postman (middleware)
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});