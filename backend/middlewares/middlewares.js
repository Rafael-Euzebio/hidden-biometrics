function standardResponse(req, res, next) {
  res.standardResponse = (status, message, data=null, errors=null) => {
    res.status(status).json({
      message,
      data,
      errors
    })
  }
  next()
}

module.exports = { standardResponse }
