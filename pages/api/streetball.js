import Streetball from '../../models/Streetball'
import connectDb from '../../utils/connectDb'
connectDb()

export default async (req, res) => {
const { _id } = req.query
const streetballs = await Streetball.findOne({ _id } )
res.status(200).json(streetballs)
}