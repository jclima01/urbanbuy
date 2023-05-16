//import controllers

const getUsersHandlers = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const postUsersHandler = async (req, res) => {
    try {

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    getUsersHandlers,
    postUsersHandler
  };
  