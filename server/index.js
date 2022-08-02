const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
require('dotenv').config();

const PORT = 5002;
const PUBLISHABLE_KEY = process.env.KEY;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));