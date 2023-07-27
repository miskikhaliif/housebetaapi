const express = require('express')
const service = express.Router()

const services = require('../controllers/service_controller')

service.get('/',services)
service.get('/:id',services)
service.post('/',services)
service.put('/:id',services)
service.delete('/:id',services)

module.exports=service

