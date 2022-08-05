require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/api/authRoutes');
const userRoutes = require('./routes/api/userRoutes');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = 3001 || process.env.PORT;


// app.use(cookieParser);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});