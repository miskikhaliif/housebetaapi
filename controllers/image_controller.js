const express = require('express')
const img =express()

const imagemodel = require('../schema/images_schema')
const Joi = require('joi')

//get

try {
    img.get('',async(req,res)=>{
        const getimage= await imagemodel.find().populate({
            path:"guryo_id",
            model:"guryo"
        })
        res.status(200).send(getimage)
    })
} catch (error) {
    res.status(400).send(error.message)
}
//validation
const imgvalidate = (imagedata)=>{
    const images = Joi.object({
        guryo_id:Joi.string().required(),
        image_Url:Joi.string().required()
    })
    return images.validate(imagedata)
}
//post
try {
    img.post('',async(req,res)=>{
        const {error} = imgvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
        const postimage= await imagemodel(req.body)
        await postimage.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}
//getbyid
try {
    img.get('/:id',async(req,res)=>{
        const mid = req.params.id
        const getoneimage= await imagemodel.findById(mid)
        res.status(200).send(getoneimage)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    img.put('/:id',async(req,res)=>{
        const mgid=req.params.id
        const putimage= await imagemodel.findByIdAndUpdate(mgid,req.body,{new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//delete
try {
    img.delete('/:id',async(req,res)=>{
        const mggid =req.params.id
        const delimage= await imagemodel.findByIdAndDelete(mggid)
        res.status(200).send({message:"deleted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}


module.exports=img

