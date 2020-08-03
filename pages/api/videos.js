import connectDb from '../../utils/connectDb';
import Video from '../../models/Video'
 

connectDb()

export default async (req, res) => {
    const videos = await Video.find()
    res.status(200).json(videos)
 
 
    }
    