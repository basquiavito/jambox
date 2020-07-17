import Prime from '../../models/Prime'
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
const { _id } = req.query
const primes = await Prime.findOne({ _id } )
res.status(200).json(primes)
}