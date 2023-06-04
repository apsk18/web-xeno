const Models=require('../models/Models');
module.exports.getList=async(req,res)=>{
    const List=await Models.find()
    res.send(List)
}

module.exports.saveList=async(req,res)=>{
const {text}=req.body

Models
.create({text})
.then((data)=>{
    console.log("Added successfully...")
    console.log(data)
    res.send(data)
})
}
module.exports.updateList=async(req,res)=>{
    const {id,text}=req.body
    Models
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated successfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteList=async(req,res)=>{
    const {_id}=req.body
    Models
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully..."))
    .catch((err)=>console.log(err))
}