const {Router}= require('express')
const {getList,saveList,updateList,deleteList}=require('../controllers/Controllers');

const router=Router()

router.get('/',getList)
router.post('/save',saveList)
router.post('/update',updateList)
router.post('/delete',deleteList)

module.exports =router;