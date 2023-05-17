//import controllers
const { UserRegister, UserLogin } = require("../controllers/UserControllers.js");


const loginUserHandler = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await UserLogin(email, password)
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    const newUser = await UserRegister(email, password)
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUserHandler,
  registerUserHandler,
};
