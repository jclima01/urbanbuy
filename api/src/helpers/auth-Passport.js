const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const ClientAdmin = require("../models/Users/ClientAdmin");

const GOOGLE_CLIENT_ID="385925683575-udkfb945r2vrb13gnqbqm8ark3ngvrjk.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"


passport.use(
  new GoogleStrategy(
    {
      clientID:GOOGLE_CLIENT_ID,
      clientSecret:GOOGLE_CLIENT_SECRET,
      callbackURL:`/auth/google/callback`,
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
