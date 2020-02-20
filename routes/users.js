const Usercontroller = require('../controller/user');
var Base64 = require('js-base64').Base64;
var fs = require("fs");


class userRoutes{
  initRoutes(router) {
    router.post('/signUp',function(req,res){
      Usercontroller.signUp(req.body)
    })
    router.post('/imageUpload',function(req,res){
     Usercontroller.uploadImage(req.body)
      
    })
   
    
  }
}

module.exports = new userRoutes;
