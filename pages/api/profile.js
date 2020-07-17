import Profile from '../../models/Profile'



export default async (req, res) => {
const { _id } = req.query
const profiles = await Profile.findOne({ _id } )
res.status(200).json(profiles)
}