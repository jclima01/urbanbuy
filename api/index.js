const express = require("express");
const dbConnect = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001; // Port Server
const mainRouter = require("./src/routes/index.js");
const morgan = require("morgan");
const { auth, requiresAuth } = require("express-openid-connect");
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//Auth0
/*const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: "http://localhost:5173", //"https://dev.urbanbuy.online",
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: "https://dev-bfw0nojmxixvtvfn.us.auth0.com",
};*/

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(mainRouter);

//Auth0
/*app.use(auth(config));
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
app.get("/login", (req, res) => {
  console.log(req.oidc);
  res.oidc.login({
    returnTo: "/dashboard",
  });
});
app.get("/dashboard", requiresAuth, (req, res) => {
  console.log("here");
  res.send(JSON.stringify(req.oidc.user));
});
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});*/

app.use(mainRouter);

//Server Listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnect();
});
