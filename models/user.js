var mongoose= require ('mongoose');
var Schema =mongoose.Schema;


const UsersSchema = new Schema({
    userid:{type:String,index:true,unique:true,trim:true,required:true},
    password:{type:String},
    firstname:{type:String},
    balancechips:{type:Number,default:0.0},
    state:{type:Number,default:2},
    emailid:{type:String,required:true,match: /.+\@.+\..+/,index:true}
    
  })
  mongoose.model('Users', UsersSchema);