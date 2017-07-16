var request = require('request');


exports.getBindoAuthKey = function(req, res) {

  var json = {
      'key': process.env.BINDO_ACCESS_TOKEN
  }

  res.send( json );
}
