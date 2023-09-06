
const express = require('express');

const db = require("./config/database");

const passport = require('passport');
const passportStratergy = require('./config/passport');



const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes'));



app.listen(PORT, ()=> {

console.log(`server is running is port ${PORT}`)
});