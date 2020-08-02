import connectDb from '../../utils/connectDb';
import Profile from '../../models/Profile'
 

connectDb()

export default async (req, res) => {
    const profiles = await Profile.find()
    res.status(200).json(profiles)
 
 
    }
    