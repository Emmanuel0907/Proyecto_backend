const express = require('express');
const logger = require('morgan');


const app = express();

app.use(express.json());
app.use(logger ('dev'));

const apiRouter = require('./routers/api');
const {connect} = require('./db/db');


app.use('/api', apiRouter)
connect();


module.exports = app
