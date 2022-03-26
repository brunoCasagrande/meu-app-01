const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));

//routes.use(cors({origin: 'http://localhost:3001'}));

//Cada programa terá uma entrada de routes
const ColaboradorRout = require("./ColaboradorRout");
routes.use("/api", ColaboradorRout);

module.exports = routes;