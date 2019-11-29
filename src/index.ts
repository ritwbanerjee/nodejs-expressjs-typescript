"use strict";
import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();
const port = process.env.PORT;
const app = express();

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    console.log(`Server started at PORT ${ port }`);
});
