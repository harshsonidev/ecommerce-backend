const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Routers
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const appRouter = require('./routes');

// Global Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes Middlewares
app.use('/api', appRouter);

// Handling unhandled path
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
