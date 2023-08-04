const express =require ('express')
const homestitings = express.Router();
const {gethome,getbyidhome,posthoem,deletehome} =require('../controllers/HomeStiting_controller')

homestitings.get('/',gethome)
homestitings.get('/:id',getbyidhome)
homestitings.post('/',posthoem)
homestitings.delete('/:id',deletehome)

module.exports=homestitings;
