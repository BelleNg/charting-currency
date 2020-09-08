
const express = require("express");
const axios = require("axios");
const cors = require('cors');
const path = require("path");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public"));
// //will change using path

// app.get("/", (req, res) => {
//   res.send({ working: true });
// });

app.get("/api/coindesk/", (req, res) => {
    // get queryparams start and end for api or set to default dates
    let start = req.query.start || '2020-05-07';
    let end = req.query.end || '2020-07-12';
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
    )
    .then(function (response) {
    //response.data is object containing info from api
    //response.data.bpi is the data for graph 
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, function () {
    console.log('Server listening on port:',PORT);
  })
