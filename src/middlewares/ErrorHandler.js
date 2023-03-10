/* eslint-disable no-unused-vars */
module.exports = (err, req, res, next) => {
  const { status, message, errors } = err;
  let validationErrors;
  if (errors) {
    validationErrors = {};
    errors.array().forEach((error) => {
      validationErrors[error.param] = req.t(error.msg);
    });
  }

  res
    .status(status || 500)
    .send({ path: req.originalUrl, timestamp: Date.now(), message: req.t(message), validationErrors });
};
