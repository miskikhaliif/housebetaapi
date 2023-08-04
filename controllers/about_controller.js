const express = require ('express')
const joi = require ('joi')
const about = express()

const aboutmodel = require ('../schema/about_schema')

//get

    const aboutget = async (req,res)=>{
        try {
        const getabout = await aboutmodel.find().sort({'_id': -1 }).limit(1);
        res.status(200).send(getabout)
    } catch (error) {
    res.status(400).send(error.message)
}
}
//getid

    const getByid = async(req,res)=>{
        try {
        const getone=req.params.id
        const getoneabout = await aboutmodel.findById(getone)
        res.status(200).send(getoneabout)
    } catch (error) {
    res.status(400).send(error.message)
    }
}
//validation

    const aboutvalidate = (aboutdata) =>{
        const abou = joi.object({
            fahfaahin_yar:joi.string().required(),
            fahfaahin:joi.string().required()
        })
        return abou.validate(aboutdata)

    }
//post

    const postabout =async(req,res)=>{

        try {
        const {error} = aboutvalidate(req.body)
        if(error){
            return res.json(error.message)
        }

        const aboutxogta = await aboutmodel.find().sort({'_id': -1}).limit(1);
        if(aboutxogta.length >0){
            const updateAbout = await aboutmodel.findByIdAndUpdate(
                aboutxogta[0]._id,
                {
                    fahfaahin:req.body.fahfaahin,
                    fahfaahin_yar:req.body.fahfaahin_yar
                },
                {new: true}
            );
            res.status(200).send({message:"seceesfully updated"});

        }
       
        else{

            const postabout = await aboutmodel(req.body)
            await postabout.save()
            res.status(200).send({message:"successfully posted"})
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
        }

//delete

    const deleteabo = async(req,res)=>{
        try {
        const delid = req.params.id
        const dleteabout = await aboutmodel.findByIdAndDelete(delid)
        res.status(200).send({message:"succesfully deleted"})
    }
    
 catch (error) {
    res.status(400).send(error.message)
}
    }

module.exports={aboutget,getByid,postabout,deleteabo};