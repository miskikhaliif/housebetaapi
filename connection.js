const mongoose = require('mongoose')
require("dotenv").config()
const dbconnect = async () =>{
    try {
     return await   mongoose.connect(process.env.DB_CONNECT)
        // console.log("is connected")
    } catch (error) {
        console.log("not connected")
    }
    
}

module.exports =dbconnect