var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

var config = require('./src/infrastructure/config/env');
var { createContainer } = require('./src/container');
var errorHandler = require('./src/presentation/middlewares/errorHandler');

async function createApp() {
  var container = await createContainer();
  var app = express();

  app.use(
    cors({
      origin: config.app.corsOrigins,
      credentials: true,
    })
  );
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/health', function (req, res) {
    res.json({ status: 'ok' });
  });

  app.use('/api/auth', container.authRoutes);
  app.use('/api', container.curriculumRoutes);

  app.use(function (req, res, next) {
    res.status(404).json({ success: false, error: 'Route not found' });
  });

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
