const express = require("express");
const routeRouter = require("./routes/route");
const shipsRouter = require("./routes/ships");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);

app.use("/", routeRouter);
app.use("/ships", logger, shipsRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
