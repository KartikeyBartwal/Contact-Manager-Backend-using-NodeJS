console.log("I am in the express project bitch")

const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

console.log("CWD: " + process.cwd());

// app.use("/api/contacts" , require("routes/ContactRoutes.js"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});