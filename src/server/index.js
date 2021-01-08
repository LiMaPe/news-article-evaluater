//Require and config dotenv. Config assigns the content of .env file to process.env.
require("dotenv").config();

//Define the post variable  
const port = process.env.PORT


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

//Get the webpage 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

//Define variables used in fetch call to MeaningCloud API
const sentimentEndpoint = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey =  process.env.API_KEY;
const lang = "auto"; //will automatically detect the language of the text, and try to find a model with the name you entered in the model parameter and the language detected in the text.

//Post route, receives data from client, then uses fetch to get analysis from 3rd party API, then sends analysis data to client.
app.post('/test2', function (req, res) {
    console.log("req:", req.body, typeof(req.body))
    //BELOW TO BE CHANGED TO DATA FROM req.body
    const test = "https://time.com/5927756/donald-trump-republicans-capitol-riot/"
    const path = `${sentimentEndpoint}?key=${apiKey}&lang=${lang}&url=${req.body}`
    fetch(path, {
        method: "POST",
    })
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






