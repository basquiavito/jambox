import connectDb from '../../utils/connectDb';
import Hoopcode from '../../models/Hoopcode'
 

connectDb()

export default async (req, res) => {
    const hoopcodes = await Hoopcode.find()
    res.status(200).json(hoopcodes)
 
 
    }
    