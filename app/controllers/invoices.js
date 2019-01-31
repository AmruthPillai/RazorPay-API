const request = require('request')

const baseURL = 'https://' + process.env.RAZORPAY_KEY_ID + ':' + process.env.RAZORPAY_KEY_SECRET + '@api.razorpay.com/v1/'

exports.get = function (req, res) {
  console.log(req.query)

  let url = baseURL + 'invoices'
  if (req.query['customer_id']) {
    url += '?customer_id=' + req.query['customer_id']
  }

  request.get(url, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.fetch = function (req, res) {
  request.get(baseURL + 'invoices/' + req.params.id, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.create = function (req, res) {
  request.post(baseURL + 'invoices', {
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
  request.patch(baseURL + 'invoices/' + req.params.id, {
    json: true,
    form: req.body
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.issue = function (req, res) {
  request.post(baseURL + 'invoices/' + req.params.id + '/issue', {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.delete = function (req, res) {
  request.delete(baseURL + 'invoices/' + req.params.id, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.cancel = function (req, res) {
  request.post(baseURL + 'invoices/' + req.params.id + '/cancel', {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}

exports.notify = function (req, res) {
  request.post(baseURL + 'invoices/' + req.params.id + '/notify_by/' + req.params.medium, {
    json: true
  }, (err, response, body) => {
    if (err) {
      return console.log(err)
    }
    res.json(body)
  })
}
