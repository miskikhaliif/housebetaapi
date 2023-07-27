const express =require ('express')
const contacts = express.Router();
const contact =require('../controllers/contactForm_controller')

contacts.get('/',contact)
contacts.get('/:id',contact)
contacts.post('/',contact)
contacts.put('/:id',contact)
contacts.delete('/:id',contact)

module.exports=contacts;
