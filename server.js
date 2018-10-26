//dipendenze del server
const express = require ('express');
const chalk = require('chalk');

//istanziamento server
const server = express();

//configurazioni
require ('./configs/server_configuration')(server);
require ('./configs/database_configuration');
require ('./configs/realtionship_configuration');

//carico le variabili per configurare il server
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL = process.env.SERVER_URL;

//creo la connessione al server
server.listen(SERVER_PORT, function(){
    console.log(chalk.green('✓') + "Server disponibile all indirizzo " + chalk.green(SERVER_URL + SERVER_PORT));
});

const routesProvider = require('./routes/routes_provider');

// Carico le rotte principali
server.use('/', routesProvider());