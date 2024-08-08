function standardResponse(req, res, next) {
  res.standardResponse = (status, message, data=null, error=null) => {
    res.status(status).json({
      message,
      data,
      error
    })
  }
  next()
}

module.exports = { standardResponse }
