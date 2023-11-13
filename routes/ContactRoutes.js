const express = require("express");
const router = express.Router();

router.get("/" , (req , res) =>{
    const ResponseData = {
        message: "yo",
        happy: "niggastra happy",
        niggohre: "lofllfs;fjdsf",
        finalMessage: "json data sent"
    };

    // res.json(ResponseData)
    res.status(200).send("sent all data");
});

module.exports = router;