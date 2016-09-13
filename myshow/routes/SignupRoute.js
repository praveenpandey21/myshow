var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/bookmyshow');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});



var signupSchema = mongoose.Schema({
  username:String,
  useremail:String,
  userpassword:String,
  usercity:String
 });


var Post = mongoose.model('signup', signupSchema);


router.post('/signupinsert', function (req, res) {
    var post = new Post({
      username: req.body.username,
      useremail:req.body.useremail,
        userpassword:req.body.userpassword,
        usercity:req.body.usercity
    });
    post.save(function(err,docs){
        console.log('Post Saved Successfully'+post);
      });
  });



/*code for star rating data save into database table rating*/

var ratingSchema = mongoose.Schema({
  moviename:String,
  ratingvalue:Number,
  noofuser:Number
 });


var ratingModel = mongoose.model('rating', ratingSchema);



router.post('/ratinginsert', function (req, res) {

    var ratingMod = new ratingModel({

      moviename: req.body.moviename,
      ratingvalue:req.body.ratingvalue,
      noofuser: 1

    });

    ratingMod.save(function(err,docs){

        console.log('Post Saved Successfully'+ratingMod);

      });
  });



/*  router.get('/ratingDisplay', function (req, res) {
        ratingModel.find({}, function (err, docs) {
        res.json(docs);
      //  console.log(docs);
        });

  });*/

  router.get('/ratingDisplay/:moviename', function (req, res) {
         ratingModel.findOne({  moviename: req.params.moviename}, function (err, docs) {
         res.json(docs);
       //  console.log(docs);
         });

   });


module.exports = router;
