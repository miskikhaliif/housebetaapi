const expres = require ('express')
const mongodb = require('mongoose')
const cors =require ('cors')
// const {monMemoryServer} = require("mongodb-memory-server-core")
require('dotenv').config()
const app =expres()
app.use(expres.json())

// const dbconnect = async()=>{
//     const createServer= await monMemoryServer.create();
//     await mongodb.connect(createServer.getUri(),{dbName: "betaHouse"})
//     .then(()=>   console.log("connected") )

// }

const dbconnect = require('./connection')
dbconnect()
app.get('/',async(req,res)=>{
    res.json("hiii")
})
app.use(cors())
app.listen(500,async()=>{
    console.log("port is  running")
})
const guryoos  = require('./route/house_route')
const images=require('./route/image_route')
const users=require('./route/user_route')
const imag = require('./route/imageGalley_route')
const clint = require('./route/ourClient_route')
const service = require('./route/service_route')
const abouts =require('./route/about_route')
const contacts =require('./route/contactForm_route')
const homestitings =require('./route/homestiting_route')
const logouts = require('./route/loginroute')
const AuthenticateRoute = require('./route/outhenticationRoute')




app.use("/guryo",guryoos)
app.use("/image",images)
app.use("/user",AuthenticateRoute(["Admin"]),users)
app.use("/imageGallery",imag)
app.use("/client",clint)
app.use("/service",service)
app.use("/abouts",abouts)
app.use("/contact",contacts)
app.use("/home",homestitings)
app.use("/login",logouts)




module.exports=app