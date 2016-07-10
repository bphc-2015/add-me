module.exports = function (router) {
  var qr = require('qr-image');
  //404 response 
  function send404(response) {
    response.writeHead(404, {
      "Content-type": "text/plain"
    });
    response.write("Error 404 : Page not found");
    response.end();
  }

  router.get('/qrcode', function (request, response) {
    response.render('index.html');
  });
  router.post('/qrcode', function (request, response) {
    //if (request.method == 'GET' && request.url == '/qrcode') {
    //^^this part is already ensured by the express router.
    var code = qr.image(request.body.text, {
      type: 'svg',
      ec_level: 'H',
      size: 10,
      margin: 0
    });
    console.log(request.body);
    response.type('svg');
    code.pipe(response);
  });

};
