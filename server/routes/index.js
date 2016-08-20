var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bear = require('./../models/model.js');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;

db.once('open',function(){
console.log("inside connection");
});
//GET

// //POST
router.post('/',function(req, res)
{
 var br = new bear();
br.lat=req.body.lat;
br.lon=req.body.lon;
br.humidity=req.body.humidity;
br.sunrise=req.body.sunrise;
br.sunset=req.body.sunset;
br.pressure=req.body.humidity;
br.cloud=req.body.cloud;
br.deg=req.body.deg;
br.speed=req.body.speed;

br.save(function(err,succ){
 console.log("inside save calback");
 if(err){
   console.log("error");
   res.send(err);
 }
 else{
   console.log("success");
   res.send({"response" :"done" });
 }
});
})

module.exports=router;
