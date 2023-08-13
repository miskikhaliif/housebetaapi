const express =require ('express')

const login =require('../controllers/loginConroller')

const logouts = express.Router()


logouts.post('/',login)

module.exports=logouts