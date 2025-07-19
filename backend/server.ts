const express = require('express');
const app = express();
const cors = require('cors');

// load environment variables
require("dotenv").config({path: "./config/.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }
));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
  });