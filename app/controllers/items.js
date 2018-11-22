const request = require('request')

const baseURL = 'https://' + process.env.RAZORPAY_KEY_ID + ':' + process.env.RAZORPAY_KEY_SECRET + '@api.razorpay.com/v1/'

exports.get = function (req, res) {
  request.get(baseURL + 'items', {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.fetch = function (req, res) {
  request.get(baseURL + 'items/' + req.params.id, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.create = function (req, res) {
  request.post(baseURL + 'items', {
    json: true,
    form: req.body
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.edit = function (req, res) {
  request.patch(baseURL + 'items/' + req.params.id, {
    json: true,
    form: req.body
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.delete = function (req, res) {
  request.delete(baseURL + 'items/' + req.params.id, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}
