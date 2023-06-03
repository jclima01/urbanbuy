const {
  ClientAdminLogin,
  ClientAdminRegister,
  ClientUpdate,
  ClientDelete,
  getAllOrders
} = require("../controllers/ClientAdminControllers.js");

const loginClientAdminHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await ClientAdminLogin(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerClientAdminHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const newClientAdmin = await ClientAdminRegister(fullName, email, password);
    res.status(200).json(newClientAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateClientHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { fullName, email, password, logo } = req.body;
    const clientUpdated = await ClientUpdate(
      clientId,
      fullName,
      email,
      password,
      logo
    );
    res.status(200).json(clientUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteClientHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    const clientDeleted = await ClientDelete(clientId);
    res.status(200).json(clientDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginClientAdminHandler,
  registerClientAdminHandler,
  updateClientHandler,
  deleteClientHandler,
};
