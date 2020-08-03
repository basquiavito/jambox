import Video from '../../models/Video'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const videos = await Video.findOne({ _id } )
res.status(200).json(videos)
}