/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: ___Manav___________________ Student ID: __153341219____________ Date: __02/10/2022______________
*
*  Online (Cyclic) Link: ________https://shy-boa-threads.cyclic.app/________________________________________________
*
********************************************************************************/ 

const express = require("express");
const PORT = process.env.PORT || 8080;
const dataService = require("./data-service.js");
const app = express();
app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/home.html");
});


console.log(`Express http server listening on ${PORT}`);
