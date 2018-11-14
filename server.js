require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
const router = express.Router();

router.use((req, res, next) => {
  console.log('There goes a request!');
  next();
});


router.get('/', (req, res) => {
  res.json({
    message: 'hooray! welcome to our api!',
  });
});

app.use('/v1', router);
app.listen(port);

console.log(`The server is up and running on http://localhost:${port}!`);
