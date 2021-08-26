import express from 'express';
import 'express-async-errors';
import AppError from './errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(
  (err, req, res, next) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({
      status: 'error',
      message: `Internal Server Error : ${err.message}`,
    });
  },
);
export default app;
