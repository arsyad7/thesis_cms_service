exports.ErrorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Internal server error';
  
  if (err.response) {
    status = err.response.status ? err.response.status : 500;
    message = err.response.data.message;
  }
  console.log(err, 'INI ERRORNYA')
  return res.status(status).json({ status, message });
}