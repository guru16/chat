//const Users = mongoose.model('Users');
const User = require('../models/user.js');
//const User = require('../public/images');

const mongoose = require('mongoose');
var fs = require('fs');



class UserController {
    uploadImage(req){
      //  console.log("enter",req);
        
     //  const base64Data=Base64.decode(req.image);
       let buff = new Buffer.alloc(req.image, 'base64');
       console.log(buff)

       let fileName=req.name;
       fs.writeFile("public/images/" + fileName, buff,function(err){
      //  if (err) throw err;
        console.log('Saved!',err);
       });
       
     //  console.log(base64Data)
    }
}
module.exports = new UserController();
