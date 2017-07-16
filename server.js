var express = require('express');
var request = require('request');
var path = require('path');
var controllers = require("./api/controllers.js");
var admin = require( './api/admin.js');
var app = express();
var bodyParser = require('body-parser');
var schedule = require('node-schedule');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Allows Angular App to access API if the app is run with 'ng-serve'
//app.use(function(req, res, next) {

  // Website you wish to allow to connect
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  //next();
//});

app.use(express.static(path.join(__dirname, 'dist')));

/*
 *  API Public Routes
 */
app.post('/email', controllers.sendEmail);

app.get('/listings/*', controllers.getListing);

app.get('/listings', controllers.getListings);

app.get('/departments', controllers.getDepartments);

app.get('/customers', controllers.getCustomers);

/*
 *  API Private Routes
 */
app.get('/admin/bindo/auth', admin.getBindoAuthKey );

/*
 *  Static HTML Routes
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/*
 * All other  routes just default to the homepage-view
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/*
var j = schedule.scheduleJob('30 * * * * *', function(){
  controllers.checkAuthorizationKey();
});
*/

//if this is not production, skip getting the auth key from bindo.
if( process.env.NODE_ENV ){
    controllers.getAuthKey();
}

if (!process.env.PORT) {
  process.env.PORT = 3032;
}

app.listen(process.env.PORT);
console.log( "Node evironment set to: " + (process.env.NODE_ENV || 'development' ));
console.log("Server started. Listening on port " + process.env.PORT);
