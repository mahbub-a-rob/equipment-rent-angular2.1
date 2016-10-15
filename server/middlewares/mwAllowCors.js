function mwAllowCors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4001");
  next();
}

module.exports = mwAllowCors;