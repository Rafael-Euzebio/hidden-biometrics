function standardResponse(req, res, next) {
  res.standardResponse = (status, message, payload=null, error=null) => {
    res.status(status).json({
      message,
      payload,
      error
    })
  }
  next()
}

module.exports = { standardResponse }
