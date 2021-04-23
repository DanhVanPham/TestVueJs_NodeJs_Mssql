const express = require('express');
const mssql = require('mssql');
const mssqlConfig = require('../configs/mssqlConfig.js');

var connection = mssql.connect(mssqlConfig)

module.exports = connection;