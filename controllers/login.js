// const express= require('express')
// // const login=express.Router()
// let bcrypt= require('bcrypt')
// let jwt= require('jsonwebtoken')
// const usermodel =require('../schema/users_schema')


// // try {
// //   login.get('/',async(req,res)=>{
// //     const allusii =await usermodel.find()
// //     res.status(200).send(allusii)
// // })
// // } catch (error) {
// //   res.status(400).send(error.message)
// // }



// const login=async(req,res)=>{
//   // const {err}=lognvaidation(req.body)
//   // if(err) return res.status(400).send({err})

//  try {
//    /////my data that has ben 
//    const user= await usermodel.findOne({email:req.body.email,status:'active'})
//    if(!user) return res.status(404).send({err:'email not found'})
//    const chechpass= await bcrypt.compare(req.body.password,user.password)
//    if(!chechpass) return res.status(400).send({err:'in valid password'})
//    const token= jwt.sign({
//        email:user.email,
//        id:user._id
//    },process.env.SECRET_KEY,{expiresIn:'1h'})
//    return res.status(200).send({Accestoken:token,login:true})
  
//  } catch (error) {
//   res.status(400).send({error})
//  }
// // }



// module.exports={login}