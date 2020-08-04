import mongoose from 'mongoose'
 
 
const { String } = mongoose.Schema.Types;
 
const UpdateSchema = new mongoose.Schema({
label: {
   type: String,
   required: true,
},
title: {
    type: String,
    required: true,
},
dekk: {
    type: String,
    required: true,
},
author: {
    type: String,
    required: true
},

date:{
    type: String,
    required: true
},

mediaUrl:{
    type: String,
    required: true
}


})
 
export default mongoose.models.Update ||
mongoose.model('Update', UpdateSchema)
