const express = require("express");

const routeRouter = express.Router();

routeRouter.get("/", (request, response) => {
  // do something
  response.send("Hello world!");
});

routeRouter.post("/", (request, response) => {
  // do something
  response.send("Hello Post request!");
});

module.exports = routeRouter;
