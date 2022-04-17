const mongoose =require("mongoose");

const residentSchema =new mongoose.Schema({
  name :{type :String,required :true},
 
  gender :{type:String,required:true},
  age :{type:Number,required:true}
},{
    
        versionKey: false, // removed __v
        timestamps: true, // createdAt, updatedAt
      
})


module.exports = mongoose.model("resident",residentSchema)