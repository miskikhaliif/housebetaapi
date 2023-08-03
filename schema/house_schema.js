const mongoose =require('mongoose')

const guryoSchema = new mongoose.Schema({
    type:{type:String, required:true},
    area:{type:String, required:true},
    address:{type:String, required:true },
    age:{type:Number,required:true},
    deposit_Amount:{type:String,required:true},
    rent_Amount:{type:String, required:true },
    parking:{type:String, required:true },
    imagePreview:{type:String, required:true },
    isAvailable:{type:String, default:"yes", enum:["yes","no"]},
    rooms:{type:String, required:true },
    bathrooms:{type:String, required:true },
    masterRoom:{type:String,required:true},
    faahfahin:{type:String, required:true },
    owner:{type:String, required:true },

    
},{timestamps:true})
const Guryomodel = mongoose.models.guryo || mongoose.model("guryo", guryoSchema)

module.exports=Guryomodel;