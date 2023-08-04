const express =require ('express')
const abouts = express.Router();
const {aboutget ,getByid, postabout,deleteabo} =require('../controllers/about_controller')

abouts.get('/',aboutget)
abouts.get('/:id',getByid)
abouts.post('/',postabout)
abouts.delete('/:id',deleteabo)

module.exports=abouts;
