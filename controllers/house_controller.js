const express = require('express')
const exp = express()
const Guryomodel =require ('../schema/house_schema')
const Joi = require('joi')

//get
try {
    exp.get('',async(req,res)=>{
        const getguryo = await Guryomodel.find()
        res.status(200).send(getguryo)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//validation

const guryvalidate = (guryodata)=>{
    const guryyos =Joi.object({
        type:Joi.string().required(),
        area:Joi.string().required(),
        address:Joi.string().required(),
        age:Joi.number().required(),
        deposit_Amount:Joi.string().required(),
        rent_Amount:Joi.string().required(),
        parking:Joi.string().required(),
        imagePreview:Joi.string().required(),
        isAvailable:Joi.string().required(),
        rooms:Joi.string().required(),
        bathrooms:Joi.string().required(),
        masterRoom:Joi.string().required(),
        faahfahin:Joi.string().required(),
        owner:Joi.string().required()
    })
    return guryyos.validate(guryodata)
}
//post
try {
    exp.post('',async(req,res)=>{
        const {error} = guryvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
        const postguryo = await Guryomodel(req.body)
        await postguryo.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    exp.get('/:id',async(req,res)=>{
        const gid = req.params.id
        const getoneguri = await Guryomodel.findById(gid)
        res.status(200).send(getoneguri)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    exp.put('/:id',async(req,res)=>{
        const guid = req.params.id
        const putguryo = await Guryomodel.findByIdAndUpdate(guid,req.body,{new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//delete
try {
    exp.delete('/:id',async(req,res)=>{
        const guriid =req.params.id
        const deleteguryo = await Guryomodel.findByIdAndDelete(guriid)
        res.status(200).send({message:"deleted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}


module.exports =exp