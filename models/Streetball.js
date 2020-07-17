import mongoose from 'mongoose'
 
 
const { String, Number } = mongoose.Schema.Types;
 
const StreetballSchema = new mongoose.Schema({
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
},

assistOff: {
   type: String,
   required: true
},

offHigh: {
   type: String,
   required: true
},

careerHigh: {
   type: String,
   required: true
},

careerHigh1: {
   type: String,
   required: true
},

rookieOff: {
   type: String,
   required: true
},

defHigh: {
   type: String,
   required: true
},

offHigh1: {
   type: String,
   required: true
},

highSchool:{
   type: String,
   required: true
},

highSchool1: {
   type: String,
   required: true
},

college:{
   type: String,
   required: true
},

offHigh2:{
   type: String,
   required: true
},

offHigh3:{
   type: String,
   required: true
},

defHigh1: {
   type: String,
   required: true
},

extra:{
   type: String,
   required: true
},

doc:{
   type: String,
   required: true
},

statsId : {
   type: String,
   required: true
},

accolades: {
   type: String,
   required: true
},

imageCollege: {
   type: String,
   required: true
},

latest1: {
   type: String,
   required: true
},

image: {
   type: String,
   required: true
},

videoIdTitle:{
   type: String,
   required: true
},

videoIdDekk:{
   type: String,
   required: true
},

points:{
   type: Number,
   required: true
},

assists: {
   type: Number,
   required: true,

},

rebounds: {
   type: Number,
   required: true
},

articleDate: {
   type: Number,
   required: true
},

articleLink:{type: String, required: true},
content:{type: String, required: true},
author:{type: String, required: true},
articleHead:{type: String, required: true}

}, articleHighHead: {
   type: String,
   required: true
},

authorHigh: {
type: String,
required: true
}
})
 
export default mongoose.models.Streetball ||
mongoose.model('Streetball', StreetballSchema)
