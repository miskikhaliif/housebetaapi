const express = require ('express')
const clinet = express()

const clientmodel = require ('../schema/ourClient_schema')
const Joi = require('joi')

//get
try {
    clinet.get('',async(req,res)=>{
        const getclinet = await clientmodel.find()
        res.status(200).send(getclinet)
    })
} catch (error) {
    res.status(400).send(error.message)
}

//getid

try {
    clinet.get('/:id',async(req,res)=>{
        const getone=req.params.id
        const getoneclinet = await clientmodel.findById(getone)
        res.status(200).send(getoneclinet)
    })
} catch (error) {
    res.status(400).send(error.message)
}
//validation
const clientvalidate= (clientdata)=>{
    const clin = Joi.object({
        name:Joi.string().required(),
        clientlogo:Joi.string().required()
    })
    return clin.validate(clientdata)
}

//post

try {
    clinet.post('',async(req,res)=>{
        const{error} = clientvalidate(req.body)
        if(error){
            return res.json(error.message)
        }
        const postclinet = await clientmodel(req.body)
        await postclinet.save()
        res.status(200).send({message:"inserted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//put
try {
    clinet.put('/:id',async(req,res)=>{
        const putid = req.params.id
        const putclinet = await clientmodel.findByIdAndUpdate(putid, req.body,{new:true})
        res.status(200).send({message:"updated"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

//delete

try {
    clinet.delete('/:id',async(req,res)=>{
        const delid = req.params.id
        const dleteclinet = await clientmodel.findByIdAndDelete(delid)
        res.status(200).send({message:"deleted"})
    })
} catch (error) {
    res.status(400).send(error.message)
}

module.exports=clinet;