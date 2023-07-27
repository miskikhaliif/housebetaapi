const express = require('express')
const home = express()
 const homestitingmodel = require('../schema/HomeStiting_schema')

 home.get('',async(req,res)=>{
    const homeget = await homestitingmodel.find()
    res.json(homeget)
 })

 module.exports = home