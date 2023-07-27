const express = require ('express')
const services = express()

const servicemodel = require ('../schema/service_schema')
const Joi = require('joi')

//get
try {
    services.get('',async(req,res)=>{
        const getservice = await servicemodel.find()
        res.status(200).send(getservice)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    services.get('/:id',async(req,res)=>{
        const getone=req.params.id
        const getoneservice = await servicemodel.findById(getone)
        res.status(200).send(getoneservice)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//valiadte
const servervalidate = (serverdata) =>{
    const servee= Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        icon:Joi.string().required()
    })
    return servee.validate(serverdata)
}

//post
try {
    services.post('',async(req,res)=>{
        const {error} = servervalidate(req.body)
        if(error){
            return res.json(error.message)
        }
        
        const postservice = await servicemodel(req.body)
        await postservice.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    services.put('/:id',async(req,res)=>{
        const putid = req.params.id
        const putservice = await servicemodel.findByIdAndUpdate(putid, req.body,{new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//delete
try {
    services.delete('/:id',async(req,res)=>{
        const delid = req.params.id
        const dleteservice = await servicemodel.findByIdAndDelete(delid)
        res.status(200).send({message:"deleted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

module.exports=services;