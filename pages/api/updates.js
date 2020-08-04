import connectDb from '../../utils/connectDb';
import Update from '../../models/Update'
 

connectDb()

export default async (req, res) => {
    const updates = await Update.find()
    res.status(200).json(updates)
 
 
    }
    