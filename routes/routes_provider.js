// Dipendenze router
const router = require('express').Router();

const routesAuthentication = require('./routes_authentication');


module.exports = () => {

     router.use('/authentication', routesAuthentication());
    

    return router;
}