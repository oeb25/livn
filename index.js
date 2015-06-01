require('babel/register');

var browserify = require('browserify-middleware');

module.exports = function(app) {
  app.use('/', browserify('./', {
    cache: false,
    transform: ['babelify']
  }));

  return function(req, res, next) {
    next();
  }
};
