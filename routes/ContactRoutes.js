const express = require("express");
const router = express.Router();

router.get("/" , (req , res) =>{
    res.status(200).json({message : "Get all contacts"});
});

router.post("/" , (req , res) =>{
    res.status(200).json({message : "Create Contact"});
});

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  });
  
  router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
  });
  


module.exports = router;