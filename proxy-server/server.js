var cors_proxy = require('cors-expo-jey');

var host = '0.0.0.0';
var port = 8081;

cors_proxy.createServer({
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: [
    'cookie',
    'cookie2',
    // Strip Heroku-specific headers
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
  ],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false,
  },
}).listen(port, host, function() {
  console.log('Running expo CORS proxy on ' + host + ':' + port);
});
