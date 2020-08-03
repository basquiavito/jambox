import mongoose from 'mongoose'
 
 
const { String } = mongoose.Schema.Types;
 
const CoinSchema = new mongoose.Schema({
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
},

contentA:{
    type: String,
    required: false,
},
contentB:{
    type: String,
    required: false,
},
contentC:{
    type: String,
    required: false,
},
contentD:{
    type: String,
    required: false,
}

})
 
export default mongoose.models.Coin ||
mongoose.model('Coin', CoinSchema)
