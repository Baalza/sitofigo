var express = require('express');
var router = express();  

exports.log= function (req, res) {  
    res.render('../views/authentication/login/login5.pug');
};