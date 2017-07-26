var BearerStrategy = require('passport-http-bearer').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var knex = require('../db/db.js');

module.exports = function(passport) {


  passport.use(new BearerStrategy(
    function(token, cb) {

      knex('users').select().where('token', token).then(function(user) {

        if (user.length == 0) {
          return cb(null, false);
        }

        return cb(null, user);
      });
    }));


  passport.use(new LocalStrategy(
    function(username, password, cb) {

      knex('users').select().where('username', username).then(function(user) {

        if (user.length == 0) {
          return cb(null, false);
        }
        if (user[0].password != password) {
          return cb(null, false);
        }
        return cb(null, user[0]);
      });
    }));

  passport.serializeUser(function(user, cb) {
    cb(null, user.uid);
  });

  passport.deserializeUser(function(uid, cb) {
    knex('users').select().where('uid', uid).then(function(user) {
      cb(null, user[0]);
    });
  });

}
