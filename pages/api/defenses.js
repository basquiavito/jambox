import connectDb from '../../utils/connectDb';
import Defense from '../../models/Defense'
 

connectDb()

export default async (req, res) => {
    const defenses = await Defense.find()
    res.status(200).json(defenses)
 
 
    }
    