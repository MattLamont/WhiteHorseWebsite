var locals = require("../config/local.js");
var request = require('request');

/*
 *  Get store listings controller
 */
exports.getListings = function(req, res) {

    var listingUrl = locals.bindoUrl +
        '/stores/' +
        locals.bindoStoreSlug +
        req.url;

    var options = {
        url: listingUrl,
        headers: {
            'authorization': 'OAuth ' + locals.bindoAccessToken,
            'accept': 'application/vnd.bindo-v201501+json'
        }
    };

    req.pipe(request(options)).pipe(res);
}


/*
 *  Get store departments controller
 */
exports.getDepartments = function(req, res) {

    var listingUrl = locals.bindoUrl +
        '/stores/' +
        locals.bindoStoreSlug +
        req.url;

    var options = {
        url: listingUrl,
        headers: {
            'authorization': 'OAuth ' + locals.bindoAccessToken,
            'accept': 'application/vnd.bindo-v201501+json'
        }
    };

    req.pipe(request(options)).pipe(res);
}


/*
 *  Get store customers controller
 */
exports.getCustomers = function(req, res) {

    var listingUrl = locals.bindoUrl +
        '/stores/' +
        locals.bindoStoreId +
        req.url;

    var options = {
        url: listingUrl,
        headers: {
            'authorization': 'OAuth ' + locals.bindoAccessToken,
            'accept': 'application/vnd.bindo-v201501+json'
        }
    };

    req.pipe(request(options)).pipe(res);
}
