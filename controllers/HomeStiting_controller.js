const express = require ('express')
const joi = require('joi')
const homestiting = express()

const homestitingmodel =require('../schema/HomeStiting_schema')

//get
 const gethome =async(req,res)=>{
    try {
        const gethome =await homestitingmodel.find().sort({'_id': -1}).limit(1);
        res.json(gethome)

    } catch (error) {
        
    }
}


//validation
const homesvalidate = (homeStdata) =>{
    const homeS = joi.object({
        Title:joi.string().required(),
        Logo:joi.string().required(),
        Name:joi.string().required(),
        address:joi.string().required(),
        email:joi.string().required(),
        phone:joi.number().required(),
        whatapp:joi.number().required(),
        Facebook:joi.string().required(),
        Instagram:joi.string().required(),
        tiktok:joi.string().required(),
        Herotitle:joi.string().required(),
        HeroDiscritpion:joi.string().required(),
        HerImage:joi.string().required(),
        Footertext:joi.string().required()
    })
    return homeS.validate(homeStdata)
}
//post

const posthome =async(req,res)=>{

    try {
    const {error} = homesvalidate(req.body)
    if(error){
        return res.json(error.message)
    }

    const homexogta = await homestitingmodel.find().sort({'_id': -1}).limit(1);
    // res.send(homexogta[0]._id)
    // console.log(homexogta[0]._id)
    if(homexogta.length >0){
        const updatehome = await homestitingmodel.findByIdAndUpdate(
            homexogta[0]._id,
            {
                Title:req.body.Title,
            Logo:req.body.Logo,
            Name:req.body.Name,
            address:req.body.address, 
            email:req.body.email,
            phone:req.body.phone, 
            whatapp:req.body.whatapp,
            Facebook:req.body.Facebook, 
           Instagram:req.body.Instagram,
            tiktok:req.body.tiktok,
           Herotitle:req.body.Herotitle,
          HeroDiscritpion:req.body.HeroDiscritpion,
          HerImage:req.body.HerImage,
           Footertext:req.body.Footertext
            },
            {new: true}
        );
        res.status(200).send({message:"seccesfullty updated"});

    }
   
    else{

        const postahomes= await homestitingmodel(req.body)
        await postahomes.save()
        res.status(200).send({message:"successfully posted"})
    }

} catch (error) {
    res.status(400).send(error.message)
}
    }

//delete
    const deletehome =async(req,res)=>{
        try {
        const homeid = req.params.id
        const delhome = await homestitingmodel.findByIdAndDelete(homeid)
        res.status(200).send({message:"deleted"})
    
} catch (error) {
    res.status(400).send(error.message)
}
}
//getid

   const getbyidhome =async(req,res)=>{
        try {
        const hoem= req.params.id
        const getoenhome = await homestitingmodel.findById(hoem)
        res.status(200).send(getoenhome)
} catch (error) {
    res.status(400).send(error.message)
}
    }


module.exports={gethome,getbyidhome,posthome,deletehome};