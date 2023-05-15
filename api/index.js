const express = require('express');
const  dbConnect  = require('./config/db');
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5001 // Port Server

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Server Listen
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
    dbConnect();
})