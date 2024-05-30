const express = require('express');
 const router = express.Router();
 const ArtistController = require("../controllers/artist.Controller");

 router.get("/getArtist", ArtistController.ArtistAllController);
 router.post("/creation", ArtistController.ArtistCreationController);
 router.patch("/modification", ArtistController.ArtistModificationController);
 router.delete("/delete", ArtistController.ArtistDeleteController);

 module.exports = router;