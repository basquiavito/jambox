import Profile from '../../models/Profile'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const profiles = await Profile.findOne({ _id } )
res.status(200).json(profiles)
}