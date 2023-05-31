const { Router } = require("express");
const WebhookRouter = Router();
const {

    webhookHandler
} = require("../handlers/WebhookHandlers.js");

WebhookRouter.post("/", webhookHandler);
module.exports = WebhookRouter;
