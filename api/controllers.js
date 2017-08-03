var request = require('request');
var knex = require('../db/db.js');

var mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});



exports.getListing = function(req, res) {

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
    if (error) {
      console.log(error);
      res.status(500).send({
        error: error
      });
    } else {
      res.send(req.body);
    }

  });
}

exports.getAuthKey = function() {

  //oauth authorization request url
  var bindoOAuthUrl = process.env.BINDO_URL + '/oauth/authorize';

  //oauth authorization request body
  var authRequestBody = {
    username: process.env.BINDO_USERNAME,
    password: process.env.BINDO_PASSWORD,
    grant_type: "password",
    client_id: process.env.BINDO_CLIENT_ID,
    client_secret: process.env.BINDO_CLIENT_SECRET
  };

  request.post({
    headers: {
      'content-type': 'application/json',
      'accept': 'application/vnd.bindo-v201501+json'
    },
    url: bindoOAuthUrl,
    body: JSON.stringify(authRequestBody)
  }, function(error, res, body) {
    if (error) {
      console.log(error);
    } else {
      var resp_data = JSON.parse(res.body)
      process.env.BINDO_ACCESS_TOKEN = resp_data.data.access_token;
    }
  });
}

exports.checkAuthorizationKey = function() {

  request.head({
    headers: {
      'content-type': 'application/json',
      'accept': 'application/vnd.bindo-v201501+json'
    },
    url: 'https://api2.bindo.com/stores/d93/listings'
  }, function(error, res, body) {

    if (res.statusCode == 401) {
      exports.getAuthKey();
    }
  });
}

exports.getAllBlogPosts = function( req , res){
    knex('posts').select().then(function(data){
        res.json( data );
    });
}

exports.getBlogPost = function( req , res){
    knex.from( 'posts' ).where('id' , req.params.id )
    .then( function( post ){
        res.json( post );
    })
}

exports.getAllHomeImages = function( req , res ){
  knex('images').select().orderBy('id', 'asc').then(function(data){
      res.json( data );
  });
}
