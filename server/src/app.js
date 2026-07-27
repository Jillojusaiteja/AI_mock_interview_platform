import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const app = express();

const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header, such as Postman.
      if (!origin) return callback(null, true);

      // Allow Vite during local development on either address.
      if (
        (process.env.NODE_ENV || 'development') === 'development' &&
        /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
      ) {
        return callback(null, true);
      }

      // Allow the configured frontend URL, useful after deployment.
      if (origin === clientUrl) return callback(null, true);

      return callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json({ limit: '10mb' }));

app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;