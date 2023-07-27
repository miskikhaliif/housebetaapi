const mongoose = require ('mongoose')

const clientschema = new mongoose.Schema({
    name:{type:String, required:true},
    clientlogo:{type:String, required:true}
})

const clientmodel = mongoose.model("client",clientschema)

module.exports=clientmodel;