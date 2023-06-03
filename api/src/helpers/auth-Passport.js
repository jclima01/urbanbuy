const passport = require('passport');
require("dotenv").config();
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const ClientAdmin = require("../models/Users/ClientAdmin");

const GOOGLE_CLIENT_ID = "385925683575-ph7ftv9rht4lask785mf2ggttt01cdpf.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    rafce
    
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

