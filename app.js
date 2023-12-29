require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use([
    express.json(),
    express.urlencoded({ extended: true })
]);

app.get('/health', (req, res) => {
    res.status(200).send('Alive!');
});

const server = app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = { app, server };