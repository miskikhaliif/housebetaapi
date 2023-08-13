const express = require('express')
const clint= express.Router()

const clinet = require('../controllers/ourClient_controller')

const AouthenticationRoute=require('../route/outhenticationRoute')

clint.get('/',clinet)
clint.get('/:id',clinet)
clint.post('/',clinet)
clint.put('/:id',clinet)
clint.delete('/:id',clinet)

module.exports=clint
