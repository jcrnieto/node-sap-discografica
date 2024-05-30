const express = require("express");
var router = express.Router();
const {JWTStrategy} = require("@sap/xssec");
const passport = require("passport");
const xsenv = require("@sap/xsenv");

xsenv.loadEnv();

const genderRoute= require("./genders.Route");
const artistRoute= require("./artist.Route");
const discRoute= require("./disc.Route");
const songRoute= require("./song.Route");
const infoHana=require("./infoHana.Route");
const infoDestination=require("./infoDestination.route");


passport.use(new JWTStrategy(xsenv.getServices({ 'uaa': { tag: "xsuaa" } }).uaa));
router.use(passport.initialize());
router.use(passport.authenticate('JWT', { session: false }));


router.use("/genders",genderRoute);
router.use("/artist",artistRoute);
router.use("/disc",discRoute);
router.use("/song",songRoute);
router.use("/infoHana",infoHana);
router.use("/infoDestination",infoDestination);


// const SapCfAxios = require('sap-cf-axios').default;
// const destinationUrl= "requisitions";
// const sapAxios = SapCfAxios(destinationUrl);

// router.get('/getArtistDestinationUrl', async (req, res) => {
    
//     try {
//             const response = await sapAxios.get('/cabecera'); 
//             res.send(response.data);
       
//     } catch (error) {
//         console.error('Error al conectar destination:', error);
//         res.status(500).send('Error al conectar destination o al obtener artista.');
//     }
// });


module.exports = router;