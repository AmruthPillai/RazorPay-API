RazorPay API
============
This project is a NodeJS + Express Wrapper for the RazorPay API.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

The routes are similar to the original API documentation that can be found here: https://docs.razorpay.com/  

For those who are familiar with ExpressJS's routing mechanism, you can check out the `/app/routes.js` file for the route directory.

Usage 
-----
The API is built in a plug-and-play fashion, where all you need to get it started is create the `.env` file at the root folder with the following variables set.
```
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```
You can find/generate these variables when you sign up to RazorPay here: https://dashboard.razorpay.com/

APIs Available
--------------
* Invoices

* Customers

* Items

TODO
----
* Payments

* Refunds

* Orders

* Transfers

* Virtual Accounts

* Plans

* Subscriptions

* Addons

* Webhooks

* Partner Auth

Issues
------
Feel free to submit issues and enhancement requests.

Contributing
------------
Please refer to each project's style guidelines and guidelines for submitting patches and additions.  
In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE:** Be sure to merge the latest from "upstream" before making a pull request!
