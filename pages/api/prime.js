import Prime from '../../models/Prime'



export default async (req, res) => {
const { _id } = req.query
const primes = await Prime.findOne({ _id } )
res.status(200).json(primes)
}