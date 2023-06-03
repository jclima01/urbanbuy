const PassportRouter = require("express").Router();
const passport = require('passport');


function isLogged( req, res, next) {
    req.user ? next() : res.sendStatus(403);
}


PassportRouter.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

PassportRouter.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));

PassportRouter.get('/auth/google/failure' , (req, res)=>{
    res.send('Something wnet Wrong!');
})

PassportRouter.get('/auth/logout' ,(req, res)=>{
        req.session.destroy();
        req.logout();
        res.send('see you again')
})

PassportRouter.get('/auth/protected' , isLogged, (req, res)=>{
    let name = req.user.picture
    res.send(`'Hello ${name} '`);
})

module.exports = PassportRouter;
