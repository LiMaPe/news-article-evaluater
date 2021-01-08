//Require and config dotenv. Config assigns the content of .env file to process.env.
require("dotenv").config();

//Define the env variables. process.env has the keys and values as defined in the .env file.
const port = process.env.PORT
const apiKey =  process.env.API_KEY;

//Require express and set up an instance of app
const fetch = require('node-fetch');
const express = require('express');
const app = express()

//Middleware
//Require and set the body-parse 
const bodyParser = require('body-parser')
app.use(bodyParser.text());

//Cors for cross origin allowance 
const cors = require('cors');

//Enables all CORS requests
app.use(cors());

//server looks for asset files in dist. Connect the server-side and client-side (browser) code.
app.use(express.static('dist'))

//Setup express server
app.listen(port, () =>
  console.log(`NEWS-app listening on port ${port}`),
);

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/test2', function (req, res) {
    console.log("req:", req.body)

    fetch('https://api.mocki.io/v1/b043df5a')
    .then(response => response.json())
    .then(data => {
        res.send(data)
    });
    

})

//Add a GET route that returns respons from mockAPI
app.post('/test', function (req, res) {
    console.log({req});
    res.send(mockAPIResponse)
})



//make api call to meaning cloud






