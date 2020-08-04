import Update from '../../models/Update'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const updates = await Update.findOne({ _id } )
res.status(200).json(updates)
}