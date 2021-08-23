const express = require('express');

const app = express();

const port = 5000;

const logger = require('./middleware/logger');

app.use(logger)

app.use(express.json())

app.use(express.static(__dirname+ 'public'));

app.listen(port,(err) => {
    err
    ?console.log(err)
    :console.log(`the server is running on port ${port}`)
})