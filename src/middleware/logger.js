const logger = (request, response, next) => {
  console.log("Request to ships endpoint", request.method, request.path);
  next();
};

module.exports = logger;
