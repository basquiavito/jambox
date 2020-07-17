import mongoose from 'mongoose'
 
 
const { String, Number } = mongoose.Schema.Types;
 
const PrimeSchema = new mongoose.Schema({
name: {
   type: String,
   required: true,
},
lastname:{
   type:String,
   required: true
},
 
 
team: {
   type: String,
   required: true,
},

mediaUrl: {
   type: String,
   required: true,

height:{
   type: String,
   required: true
},

weight: {
type: String,
required: true
},

drafted: {
   type: String,
   required: true
},

born: {
   type: String,
   required: true
},

from: {
   type: String,
   required: true
},

feet: {
   type: Number,
   required: true
},

inches: {
   type: Number,
   required: true
},

meter: {
   type: Number,
   required: true
},

lbs:{
   type: Number,
   required: true
},

kg:{
   type: Number,
   required: true
},

ovr:{
   type: Number,
   required: true
},

placeholder: {
type: String,
required: true
},

videoId: {
   type: String,
   required: true
}

}
})
 
export default mongoose.models.Prime ||
mongoose.model('Prime', PrimeSchema)
