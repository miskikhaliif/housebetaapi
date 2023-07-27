const mongoose = require ('mongoose')

const contactSchema = new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    message:{type:String, required:true}
})
const contactmodel = mongoose.model("contact",contactSchema)

module.exports=contactmodel;