require('dotenv').config();
const express = require('express');
const connection = require('./configs/database');
const allRoutes = require('./routes/index');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.use('/api', allRoutes);

app.listen(port)