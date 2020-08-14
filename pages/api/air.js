import Air from '../../models/Air'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const airs = await Air.findOne({ _id } )
res.status(200).json(airs)
}