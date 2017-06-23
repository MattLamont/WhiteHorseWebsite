var express = require('express');
var request = require('request');
var path = require('path');
var controllers = require("./api/controllers.js");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Allows Angular App to access API if the app is run with 'ng-serve'
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

/*
 *  API Routes
 */
app.post('/email' , controllers.sendEmail);

app.get('/listings/*', controllers.getListing);

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

        if( !process.env.PORT ){
            process.env.PORT = 3032;
        }

        app.listen(process.env.PORT);
        console.log("Server started. Listening on port " + process.env.PORT );
    }

});
