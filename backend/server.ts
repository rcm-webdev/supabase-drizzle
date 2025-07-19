import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import signsRouter from './routes/signs';


// load environment variables
dotenv.config({path: "./config/.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }
));

app.use("/api/signs", signsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
  });