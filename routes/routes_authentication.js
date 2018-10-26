// Dipendenze router
const router = require('express').Router();
const authenticationController = require ("../controllers/authentication_controller");
module.exports = () => {

    router.route('/login').get(authenticationController.ciao);
    
        
    return router;
};