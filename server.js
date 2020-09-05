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

app.get("/api/coindesk", (req, res) => {
    // will need to change start and end in url to get dynamic dates.
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05`
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
