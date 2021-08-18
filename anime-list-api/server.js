//for building rest apis
const express = require("express");

//helps parse the request and create the req.body object
// not required anymore: const bodyParser = require("body-parser");

//provides express middleware to enable cors with various options
//cors: cross-origin resource sharing, meaning a protocol that enables scripts running on a browser client to interact with ressources from different origin
const cors = require("cors");

require('dotenv').config();


const app = express();

const db = require("./app/models");
db.sequelize.sync();

let corsOptions = { 
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));

//app.use(bodyParser.json()); deprectated. now use this: (body parsing has become builtin with express)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//simple route
app.get("/", (req, res) => {
    res.json({ 
      message: "Welcome to anime-list backend. Seeing this message means it is working!" 
    });
});

app.post('/item', function (req, res) {
  anime.create(req.body);
  res.json(req.body);
});

app.get("/animes", (req, res) => {
  anime.findAll().then((anime) => {
    res.json(anime);
  })
}); 

app.post("/animes", (req, res) => {
  anime.create().then((anime) => {
    res.json(anime);
  })
});

//listen for request, setting the port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const { anime } = require("./app/models");
db.sequelize.sync();




