const { Router } = require("express");
const passport = require("passport")
const PassportRouter = Router();

const CLIENT_URL ="http://localhost:5173"


PassportRouter.get('/login/failed', (req, res)=> {
    res.send('llega')
})
PassportRouter.get('/login/success', (req, res)=> {
    res.send('llega')
})
PassportRouter.get('/google/callback' , passport.authenticate('google',{ 
    successRedirect:CLIENT_URL,
    failureRedirect: '/login/failed' 
},(req,res) => {
    // Callback
  }))

  PassportRouter.get('/auth/google', passport.authenticate('google', { 
    scope: ['openid','profile', 'email'] }));

module.exports = PassportRouter;