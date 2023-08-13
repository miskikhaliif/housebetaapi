const express= require('express')
let bcrypt= require('bcrypt')
let jwt= require('jsonwebtoken')
const usermodel =require('../schema/users_schema')
const Joi = require('joi')

const loginValidet = (logindaat) =>{
    const loginv = Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
    return loginv.validate(logindaat)

}
const login=async(req,res)=>{
    const {error} =loginValidet(req.body)
    if(error) return res.status(400).send({error})
  
   try {
     /////my data that has ben 
     const user= await usermodel.findOne({username:req.body.username,status:'active'})
     if(!user) return res.status(404).send({err:'username not found'})
     const chechpass= await bcrypt.compare(req.body.password,user.password)
     if(!chechpass) return res.status(400).send({err:'in valid password'})
     const token= jwt.sign({
         username:user.username,
         id:user._id
     },process.env.SECRET_KEY,{expiresIn:'1h'})
     return res.status(200).send({Accestoken:token,login:true})
    
   } catch (error) {
    res.status(400).send({error})
   }
  }

  module.exports= login