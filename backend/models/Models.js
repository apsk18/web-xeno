const mongoose = require('mongoose');
const ModelSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})
module.exports =mongoose.model('Xeno',ModelSchema)