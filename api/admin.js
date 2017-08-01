var request = require('request');
var knex = require('../db/db.js');

var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');

aws.config.update({
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
    region: 'us-west-1'
});

s3 = new aws.S3();


exports.adminLogin = function(req, res) {
  knex.from('users').where('username', req.body.username).then(function(data) {
    res.send(data[0]);
  });
}

exports.failLogin = function(req, res) {
  res.status(401).send({
    error: 'login failed'
  });
}


exports.getBindoAuthKey = function(req, res) {

  var json = {
    'key': process.env.BINDO_ACCESS_TOKEN
  }

  res.send(json);
}

exports.createBlogPost = function(req, res) {

  var post = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    image_url: req.body.image_url
  };

  knex('posts').insert(post)
    .then(function() {
      res.send(post);
    })
}

exports.updateBlogPost = function(req, res) {
  knex('posts')
    .where('id', req.params.id)
    .update(req.body)
    .then(function() {
      res.send(req.body);
    });
}

exports.deleteBlogPost = function(req, res) {
  knex('posts')
    .where('id', req.params.id)
    .del()
    .then(function() {
      res.send(req.body);
    });
}

exports.createBlogImage = function(req, res , next) {
  if( !req.file.location ){
    res.status(400).send({
      error: 'image upload failed'
    });
  }
  console.log( req.file.location );
  var json = {
    'image_url': req.file.location
  };
    res.send(json);
}

exports.upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'whvaporblogimages',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});
