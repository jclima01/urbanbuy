//import controllers

const loginClientAdminHandler = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const registerClientAdminHandler = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    loginClientAdminHandler,
    registerClientAdminHandler,
  };
  