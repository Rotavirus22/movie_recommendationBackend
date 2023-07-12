const errorHandler = (error, req, res, next) => {
  if (error) {
    res.status(400).json({
      status: "Failed",
      message: "SomeThing went wrong",
    });
  } else {
    next();
  }
};
module.exports = errorHandler;
