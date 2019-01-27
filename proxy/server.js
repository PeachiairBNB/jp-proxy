const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');


const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/:id', express.static(path.join(__dirname, 'public')));

// app.use('/api/items', proxy({
//     target: 'http://ec2-18-223-255-148.us-east-2.compute.amazonaws.com:3005'
// }));

// app.use('/api/pictures', proxy({
//     target: 'http://ec2-3-17-163-197.us-east-2.compute.amazonaws.com:5000'
// }));

app.use('/api/booking', proxy({
    target: 'ec2-3-16-156-206.us-east-2.compute.amazonaws.com'
}))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});