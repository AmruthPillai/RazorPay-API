const Razorpay = require('razorpay')

var razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

exports.get = function (req, res) {
  // Get all customers needs to be implemented by the SDK
  razorpay.customers.all()
}
