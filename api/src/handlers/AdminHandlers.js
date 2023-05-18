//import controllers
const { AdminRegister, AdminLogin } = require("../controllers/AdminControllers");


const loginHandler = async (req, res) => {
    try {
      const {email, password} = req.body
      const user = await AdminLogin(email, password)
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const registerHandler = async (req, res) => {
    try {
      const { email, password } = req.body
      const newAdmin = await AdminRegister(email, password)
      res.status(200).json(newAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    registerHandler,
    loginHandler
  };
  