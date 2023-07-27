const express = require ('express')
const joi = require('joi')
const contact = express()

const contactmodel = require ('../schema/contactForm_schema')

//get
try {
    contact.get('',async(req,res)=>{
        const getcontact = await contactmodel.find()
        res.status(200).send(getcontact)
    })
    
} catch (error) {
    res.status(400).send(error.message)
}

//getid
try {
    contact.get('/:id',async(req,res)=>{
        const getone=req.params.id
        const getonecontact = await contactmodel.findById(getone)
        res.status(200).send(getonecontact)
    })
    
} catch (error) {
    res.status(400).send(error.message)
}


//validate
const conactvalidate = (contactdata) =>{
    const conact = joi.object({
        name:joi.string().required(),
        phone:joi.number().required(),
        message:joi.string().required()
    })
    return conact.validate(contactdata)
}

//post
try {
    contact.post('',async(req,res)=>{
        const{error} = conactvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
         const postcontact = await contactmodel(req.body)
        await postcontact.save()
        res.status(200).send({message:"sucessfully posted"})
    })
    
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    contact.put('/:id',async(req,res)=>{
        const putid = req.params.id
        const putcontact = await contactmodel.findByIdAndUpdate(putid, req.body,{new:true})
        res.status(200).send({message:"sucessfully updated"})
    })
    
} catch (error) {
    res.status(400).send(error.message)
}

//dlete
try {
    contact.delete('/:id',async(req,res)=>{
        const delid = req.params.id
        const dletecontact = await contactmodel.findByIdAndDelete(delid)
        res.status(200).send({message:"sucessfully deleted"})
    })
    
    
} catch (error) {
    res.status(400).send(error.message)
}


module.exports=contact;