import connectDb from '../../utils/connectDb';
import Versu from '../../models/Versu'
 

connectDb()

export default async (req, res) => {
    const versuz = await Versu.find()
    res.status(200).json(versuz)
 
 
    }
    