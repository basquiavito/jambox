import connectDb from '../../utils/connectDb';
import Air from '../../models/Air'
 

connectDb()

export default async (req, res) => {
    const airs = await Air.find()
    res.status(200).json(airs)
 
 
    }
    