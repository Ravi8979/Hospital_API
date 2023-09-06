//Connect With Mongo DB using Mongoose Library
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/codial_development');

//Establish Connection With DB
const db = mongoose.connection;

//Msg if DB have Some Errors
db.on('error',console.log.bind(console,"Error in connecting database"));

//Msg Once if DB is Connected SuccessFully
db.once('open',function(){
    console.log('Connected To Database:: MongoDB');
})

//Exports Our db for the use of Main Homepage Index.js
module.exports=db;