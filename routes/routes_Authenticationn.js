// Dipendenze router
const router = require('express').Router();
const authenticationController = require ("../controllers/authentication_controller");
module.exports = () => {

    router.route('/loginn').get(authenticationController.ciao);
    
        
    return router;
};