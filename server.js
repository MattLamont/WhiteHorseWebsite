var express = require('express');
var request = require('request');
var path = require('path');
//var locals = require("./config/local.js");
var controllers = require("./api/controllers.js");
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

/*
 *  API Routes
 */
app.get('/listings', controllers.getListings);

app.get('/departments', controllers.getDepartments);

app.get('/customers', controllers.getCustomers);

/*
 *  Static HTML Routes
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


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

console.log( process.env.BINDO_URL);

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
        process.env.BINDO_ACCESS_TOKEN = resp_data.data.access_token;

        app.listen(process.env.PORT || 3000);
        console.log("Server started. Listening on port " + process.env.PORT || "3000" );
    }

});
