require('dotenv').config();
const express = require('express');
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
