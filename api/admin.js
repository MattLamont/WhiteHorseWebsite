var request = require('request');
var knex = require('../db/db.js');

exports.adminLogin = function( req , res ){
    knex.from('users').where( 'username' , req.body.username ).then( function( data ){
        res.json( data[0] );
    });
}

exports.failLogin = function( req , res ){
    res.status(401).send({
      error: 'login failed'
    });
}


exports.getBindoAuthKey = function(req, res) {

  var json = {
      'key': process.env.BINDO_ACCESS_TOKEN
  }

  res.send( json );
}

exports.createBlogPost = function( req , res){

    var post = {
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        image_url: req.body.image_url
    };

    knex('posts').insert( post )
    .then( function(){
        res.send( post );
    })
}

exports.updateBlogPost = function( req , res){
    knex( 'posts' )
    .where( 'id' , req.params.id )
    .update( req.body )
    .then( function(){
        res.send( req.body );
    });
}

exports.deleteBlogPost = function( req , res){
    knex( 'posts' )
    .where( 'id' , req.params.id )
    .del()
    .then( function(){
        res.send( req.body );
    });
}
