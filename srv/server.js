const express = require("express");
require('dotenv').config();
const xsenv = require("@sap/xsenv");
xsenv.loadEnv();

const app = express();
const api = require("./routes");


app.use(express.json());

app.use("/api", api);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});