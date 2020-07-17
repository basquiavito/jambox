import connectDb from '../../utils/connectDb';
import Streetball from '../../models/Streetball'
 

connectDb()

export default async (req, res) => {
    const streetballs = await Streetball.find()
    res.status(200).json(streetballs)
 
 
    }
    