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

var express = require("express");
 var app = express();
 var path = require("path");
 
 //adding path tp product-service.js module to interact with it
 var data = require("./web322-app-master/product-service");
 
 var HTTP_PORT = process.env.PORT || 8080;
 
 function onHttpStart() {
   console.log("Express http server listening on: " + HTTP_PORT);
   return new Promise(function (res, req) {
     data
       .initialize()
       .then(function (data) {
         console.log(data);
       })
       .catch(function (err) {
         console.log(err);
       });
   });
 }
 app.use(express.static("public"));
 
 //setting up a defualt route for local host
 app.get("/", function (req, res) {
   res.sendFile(path.join(__dirname + "/views/index.html"));
 });
 
 //route to products
 app.get("/products", function (req, res) {
   data
     .getPublishedProducts()
     .then(function (data) {
       res.json(data);
     })
     .catch(function (err) {
       res.json({ message: err });
     });
 });
 
 //route to demos
 app.get("/demos", function (req, res) {
   data
     .getAllProducts()
     .then(function (data) {
       res.json(data);
     })
     .catch(function (err) {
       res.json({ message: err });
     });
 });
 
 //route to categories
 app.get("/categories", function (req, res) {
   data
     .getCategories()
     .then(function (data) {
       res.json(data);
     })
     .catch(function (err) {
       res.json({ message: err });
     });
 });
 
 //if no route found show Page Not Found
 app.use(function (req, res) {
   res.status(404).sendFile(path.join(__dirname, "/views/error.html"));
 });
 
 app.listen(HTTP_PORT, onHttpStart)