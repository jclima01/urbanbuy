const express = require('express');
const  dbConnect  = require('./config/db');
const cors = require('cors')
require('dotenv').config()
const app = express()
const passport = require('passport')
const PORT = process.env.PORT || 5001 // Port Server
const mainRouter = require("./src/routes/index.js");
const session = require('express-session')
const morgan = require("morgan")
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('./src/helpers/auth-Passport')


// Middleware 
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(mainRouter)

  
//Server Listen
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
    dbConnect();
})
