const express = require('express');
const router = express.Router();
const discController = require("../controllers/disc.Controller");

 router.get("/getDisc", discController.discAllController);
 router.post("/getDisc", discController.discCreationController);
 router.patch("/getDisc", discController.discModificationController);
 router.delete("/getDisc", discController.discDeleteController);

 module.exports = router;