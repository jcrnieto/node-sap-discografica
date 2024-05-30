const express = require('express');
 const router = express.Router();
 const songController = require("../controllers/song.Controller");

 router.get("/getSong", songController.SongAllController);
 router.post("/creation", songController.SongCreationController);
 router.patch("/modification", songController.SongModificationController);
 router.delete("/delete", songController.SongDeleteController);

 module.exports = router;