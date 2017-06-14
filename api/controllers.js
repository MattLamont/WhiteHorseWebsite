//var locals = require("../config/local.js");
var request = require('request');

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
