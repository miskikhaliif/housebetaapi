
const jwt = require ('jsonwebtoken')
const usermodel =require('../schema/users_schema')
require ('dotenv').config()
const AuthenticateRoute = (allowedRoles) =>{
    return async (req,res,next) =>{
        const Tokenheader = req.headers['authorization']
        console.log(Tokenheader)
        if(!Tokenheader) return res.status(401).send("access token is not provided")
        const token = Tokenheader.split(' ')[1]
    // console.log("token",token) 
        try {
            const tokenverify =jwt.verify(token,process.env.SECRET_KEY)

            const user = await usermodel.findById(tokenverify.id) 
            // console.log("tokenverfy",tokenverify.id)
             console.log(tokenverify.id)
            if(!user) return res.status(404).send('user not found')
            if(!user .status=='active') return res.status(401).send('user is not active')
        if(!allowedRoles.includes(user.role)) return res.status(401).send('you are not allowed to acess this route')
// console.log(user.role)
        next()
        } catch (error) {

            res.status(401).send(error.message) 
        }
    }
}

module.exports = AuthenticateRoute;