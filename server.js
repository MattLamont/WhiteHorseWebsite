var express = require('express');
var request = require('request');
var locals = require("./config/local.js");
var controllers = require("./api/controllers.js");
var app = express();

/*
 *  API Routes
 */
app.get('/listings', controllers.getListings);

app.get('/departments', controllers.getDepartments);

app.get('/customers', controllers.getCustomers);


//oauth authorization request url
var bindoOAuthUrl = locals.bindoUrl + '/oauth/authorize';

//oauth authorization request body
var authRequestBody = {
    username: "white_horse_api",
    password: "EFI8mVqlouwSERes",
    grant_type: "password",
    client_id: locals.bindo_client_id,
    client_secret: locals.bindo_client_secret
};

//Get the bindo oauth access token and then start server
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
        locals.bindoAccessToken = resp_data.data.access_token;

        app.listen(process.env.PORT || 3000);
        console.log("Server started. Listening on port 3000");
    }

});
