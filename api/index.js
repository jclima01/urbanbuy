const express = require('express');
const  dbConnect  = require('./config/db');
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5001 // Port Server
const mainRouter = require("./src/routes/index.js");
const morgan = require("morgan")
// Middleware 
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter)

//Server Listen
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
    dbConnect();
})
