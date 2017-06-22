var request = require('request');

var mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});



exports.getListing = function(req, res) {

  var listingUrl = process.env.BINDO_URL +
    '/stores/' +
    process.env.BINDO_STORE_SLUG +
    req.url;

  console.log(listingUrl);

  var options = {
    url: listingUrl,
    headers: {
      'authorization': 'OAuth ' + process.env.BINDO_ACCESS_TOKEN,
      'accept': 'application/vnd.bindo-v201501+json'
    }
  };

  req.pipe(request(options)).pipe(res);
}


/*
 *  Get store listings controller
 */
exports.getListings = function(req, res) {

  var listingUrl = process.env.BINDO_URL +
    '/stores/' +
    process.env.BINDO_STORE_SLUG +
    req.url;

  var options = {
    url: listingUrl,
    headers: {
      'authorization': 'OAuth ' + process.env.BINDO_ACCESS_TOKEN,
      'accept': 'application/vnd.bindo-v201501+json'
    }
  };

  req.pipe(request(options)).pipe(res);
}


/*
 *  Get store departments controller
 */
exports.getDepartments = function(req, res) {

  var listingUrl = process.env.BINDO_URL +
    '/stores/' +
    process.env.BINDO_STORE_SLUG +
    req.url;

  var options = {
    url: listingUrl,
    headers: {
      'authorization': 'OAuth ' + process.env.BINDO_ACCESS_TOKEN,
      'accept': 'application/vnd.bindo-v201501+json'
    }
  };

  req.pipe(request(options)).pipe(res);
}


/*
 *  Get store customers controller
 */
exports.getCustomers = function(req, res) {

  var listingUrl = process.env.BINDO_URL +
    '/stores/' +
    process.env.BINDO_STORE_ID +
    req.url;

  var options = {
    url: listingUrl,
    headers: {
      'authorization': 'OAuth ' + process.env.BINDO_ACCESS_TOKEN,
      'accept': 'application/vnd.bindo-v201501+json'
    }
  };

  req.pipe(request(options)).pipe(res);
}



/* Send email route */
exports.sendEmail = function(req, res) {

    var data = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.body
    };

    mailgun.messages().send(data, function(error, body) {
        if( error ){
            console.log( error );
            res.statusCode( 500 ).send({error: error});
        }
        else{
          res.send( req.body );
      }

      });
}
