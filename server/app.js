import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import tweetRouter from './router/tweets.js';
import authRouter from './router/auth.js';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetRouter);
app.use('/auth', authRouter);

// Not Found 전달
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
})

app.listen(8081);