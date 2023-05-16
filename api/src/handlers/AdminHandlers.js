//import controllers

const getAdminHandlers = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postAdminHandler = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAdminHandlers,
    postAdminHandler
  };
  