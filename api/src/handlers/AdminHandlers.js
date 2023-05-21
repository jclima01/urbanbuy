//import controllers
const {
  AdminRegister,
  AdminLogin,
  AdminUpdate,
  AdminDelete,
} = require("../controllers/AdminControllers");

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminLogin(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerHandler = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const newAdmin = await AdminRegister(fullName, email, password);
    res.status(200).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAdminHandler = async (req, res) => {
  try {
    const { adminId } = req.params;
    const { fullName, email, password } = req.body;
    const adminUpdated = await AdminUpdate(adminId, fullName, email, password);
    res.status(200).json(adminUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAdminHandler = async (req, res) => {
  try {
    const { adminId } = req.params;
    const adminDeleted = await AdminDelete(adminId);
    res.status(200).json(adminDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
  updateAdminHandler,
  deleteAdminHandler,
};

