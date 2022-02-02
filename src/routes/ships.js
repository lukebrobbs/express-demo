const express = require("express");
const {
  getController,
  postController,
  getShipByIdController,
} = require("../controllers/ships");

const shipsRouter = express.Router();

shipsRouter.get("/", getController);
shipsRouter.get("/:id", getShipByIdController);
shipsRouter.post("/", postController);

module.exports = shipsRouter;
