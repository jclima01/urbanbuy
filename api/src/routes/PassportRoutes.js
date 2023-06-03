const PassportRouter = require("express").Router();
const passport = require('passport');
const ClientAdmin = require("../models/Users/ClientAdmin");


function isLogged( req, res, next) {
    req.user ? next() : res.sendStatus(403);
}


PassportRouter.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

PassportRouter.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:5173/login',
        failureRedirect: '/auth/google/failure'
}));

PassportRouter.get('/auth/google/failure' , (req, res)=>{
    res.send('Something wnet Wrong!');
})

PassportRouter.get('/auth/logout' ,(req, res)=>{
        req.session.destroy();
        res.send('see you again')
})

PassportRouter.get('/auth/protected' , isLogged, async (req, res)=>{
    
   const  userfind = ClientAdmin.find({email : req.user.email})
   console.log('userfind', userfind)
   
    /* const newClientAdmin = new ClientAdmin({
        fullName: req.user.displayName,
        users: [],
        logo: req.user.picture,
        optionsDesing: [],
        catalogue: [],
        categories: [] ,
        email: req.user.email,
        password: '123456',
        permissions: "ClientAdmin"
      }) */
  
   
        /*  const clientAdmin = await newClientAdmin.save() */
   
   
    res.json(userfind);
})

module.exports = PassportRouter;
