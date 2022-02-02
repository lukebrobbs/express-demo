const getController = (request, response) => {
  // do something
  response.send("Hello world from the ships endpoint!");
};

const postController = (request, response) => {
  // do something
  response.send("Hello Post request from the ships endpoint!");
};

const getShipByIdController = (request, response) => {
  const id = request.params.id;
  response.send(id);
};

module.exports = {
  getController,
  postController,
  getShipByIdController,
};
