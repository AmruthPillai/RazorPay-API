const Razorpay = require('razorpay')

var razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

exports.get = function (req, res) {
  razorpay.invoices.all(req.query).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.fetch = function (req, res) {
  razorpay.invoices.fetch(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.create = function (req, res) {
  razorpay.invoices.create(req.body).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.edit = function (req, res) {
  razorpay.invoices.edit(req.body).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.issue = function (req, res) {
  razorpay.invoices.issue(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.delete = function (req, res) {
  razorpay.invoices.delete(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.cancel = function (req, res) {
  razorpay.invoices.cancel(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}

exports.notify = function (req, res) {
  razorpay.invoices.notifyBy(req.params.id, 'email').then(data => {
    res.json(data)
  }).catch(err => {
    res.status(err.statusCode).json(err.error)
  })
}