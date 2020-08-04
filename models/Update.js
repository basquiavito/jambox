import mongoose from 'mongoose'
 
 
const { String } = mongoose.Schema.Types;
 
const UpdateSchema = new mongoose.Schema({
 
name:{

},

pts: {

},

ast: {

},

outcome:{

}



})
 
export default mongoose.models.Update ||
mongoose.model('Update', UpdateSchema)
