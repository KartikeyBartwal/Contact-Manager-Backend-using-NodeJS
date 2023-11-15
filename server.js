console.log("I am in the express project bitch")

const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT;

console.log("CWD: " + process.cwd());

// app.get('/api/contacts' , (req , res) =>{
//     res.json({message : "Get all contacts"});
// })

app.use("/api/contacts" , require("./routes/ContactRoutes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
