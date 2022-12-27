const mongoose = require('mongoose');
const { URLDATABASE } = require('./config');

mongoose.connect(URLDATABASE);
const database = mongoose.connection;

module.exports = database;