//importo dipendenze
const database = require ('./database_configuration').database;

//importo i modelli
const User = require ('../models/User'); 
const Product = require ('../models/product');
const Order = require('../models/order');
//definisco le relazioni
User.hasMany(Order); // 1:M
Order.belongsTo(User); //1:1
Order.hasMany(Product); //1:M
Product.belongsTo(Order); //1:M


//sincornizzare i modelli col database
database.sync({force: true});