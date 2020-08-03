import Coin from '../../models/Coin'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
const { _id } = req.query
const coins = await Coin.findOne({ _id } )
res.status(200).json(coins)
}