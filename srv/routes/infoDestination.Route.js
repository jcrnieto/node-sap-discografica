const express = require('express');
const router = express.Router();
const {sapAxiosQuery} = require("../helpers/queries");
// const {JWTStrategy} = require("@sap/xssec");
// const passport = require("passport");
// const xsenv = require("@sap/xsenv");

// xsenv.loadEnv();

// passport.use(new JWTStrategy(xsenv.getServices({ 'uaa': { tag: "xsuaa" } }).uaa));
// router.use(passport.initialize());
// router.use(passport.authenticate('JWT', { session: false }));


router.get('/getArtistDestination', async (req, res) => {
     
    try {
        const response = await sapAxiosQuery({
            method: "GET",
            baseUrl: `/cabecera`,
            params: {},
        });

         res.status(200).send(response.data); 

    } catch (error) {
        console.error('Error al conectar destination:', error);
        res.status(500).send('Error al conectar destination o al obtener artista.');
    }
});


module.exports = router;
