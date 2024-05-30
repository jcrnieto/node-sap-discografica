 const express = require('express');
 const router = express.Router();
 const {gendersAllController} = require("../controllers/genders.Controller");

 router.get("/getGenders", gendersAllController);

 module.exports = router;