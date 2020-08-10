import Versu from '../../models/Versu'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const versuz = await Versu.findOne({ _id } )
res.status(200).json(versuz)
}