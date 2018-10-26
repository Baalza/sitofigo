// Dipendenze router
const router = require('express').Router();
const authenticationController = require ("../controllers/authentication_controller");
const routesAuthenticationn = require('./routes_authenticationn');
module.exports = () => {

    router.route('/login').get(authenticationController.ciao);
    router.use('/login', routesAuthenticationn());
        
    return router;
};