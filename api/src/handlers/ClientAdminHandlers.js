const { ClientAdminLogin, ClientAdminRegister } = require("../controllers/ClientAdminControllers.js");


const loginClientAdminHandler = async (req, res) => {
  try {
    const {email, password} = req.body
    const token = await ClientAdminLogin(email, password)
    res.status(200).json({token: token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  };

  const registerClientAdminHandler = async (req, res) => {
    try {
      const { email, password } = req.body
      const newClientAdmin = await ClientAdminRegister(email, password)
      res.status(200).json(newClientAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    loginClientAdminHandler,
    registerClientAdminHandler,
  };
  