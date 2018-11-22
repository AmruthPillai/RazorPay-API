const express = require('express')

const router = express.Router()

// Invoices API
const invoices = require('./controllers/invoices')
router.get('/invoices', invoices.get)
router.get('/invoices/:id', invoices.fetch)
router.post('/invoices', invoices.create)
router.post('/invoices/:id/issue', invoices.issue)
router.post('/invoices/:id/cancel', invoices.cancel)
router.post('/invoices/:id/notify/:medium', invoices.notify)
router.patch('/invoices/:id', invoices.edit)
router.delete('/invoices/:id', invoices.delete)

// Customers API
const customers = require('./controllers/customers')
router.get('/customers', customers.get)
router.get('/customers/:id', customers.fetch)
router.post('/customers', customers.create)
router.patch('/customers/:id', customers.edit)

module.exports = router
