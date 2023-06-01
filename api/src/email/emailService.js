const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
require("dotenv").config();

// Configura el transporte de SendGrid
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_KEY_EMAIL,
    },
  })
);

module.exports = transporter;
