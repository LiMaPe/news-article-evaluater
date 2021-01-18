# The News Evaluater Project 

## Table of Contents

- [Introduction](#Introduction)
- [Get started](#Get)
- [Dependencies](#Dependencies)
- [Development](#Development)

# Introduction

This project is made after finishing a series of lectures on the theme Build Tools and Single Page Web Apps. The project is a part of the Front End Web Developer Nanodegree at Udacity and is  
conducted independently. The goal of this project is to practice: 

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

The project has resulted in a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 
In order to do the NPL analysis an external API called MeaningCloud is used. The user provides an URL and receives three pieces of information based on the article. 
The information is as follows: whether the content is subjective (opinion) or objective (fact-based), whether the information
is ironic or nonironic and finally whether it is positive, neutral, or negative in tone.

# Get started

-	Clone this repo.
-	Install Node.js if not already installed.
    - Check if node is installed by:
    <br /> $ node -v
    - Install by: $ npm install node
-	To install all required dependencies run:
  <br />  $ npm install 
- Environmental variables: 
  - Acquire API credentials from MeaningCloud website. 
  - Create an .env file. Fill the .env file with your API keys like this
    - API_KEY=**************************
    - PORT=**************************
-	To start the local server run: 
  <br /> $ npm start



# Dependencies

-	Express
-	Cors
-	Body-parser
-	Dotenv
-	node-fetch
- webpack
- webpack-cli

# Development

**Step 1. Project Setup**

Following are the project prerequisites:

- Webserver: Node
- Web application framework for routing: Express
- Build tool: Webpack
- External script: Service Worker
- External APIM: Aylien or MeaningCloud

I started of with setting up and configure webpack, including loaders and plugins which we have used in the course before. Next Express is set up and a server is initialized. 
When the developement environment was ready I moved on to the MeaningCloud API. Since we want to send data to the API we need to set up a post route (server - client). I call the external API from the server side, 
which holds the API key. The data returned from the API is then passed to the client side as the response variable. 

**Step 2.Project Enhancement**

In this step functions are added to parse the response body to dynamically fill content on the page. The layout of the page is set and styling in Sass is added.

**Step 3. Offline Functionality and Testing**
















