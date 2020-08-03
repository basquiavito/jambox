import Hoopcode from '../../models/Hoopcode'
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
const { _id } = req.query
const hoopcodes = await Hoopcode.findOne({ _id } )
res.status(200).json(hoopcodes)
}