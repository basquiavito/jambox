import connectDb from '../../utils/connectDb';
import Coin from '../../models/Coin'
 

connectDb()

export default async (req, res) => {
    const coins = await Coin.find()
    res.status(200).json(coins)
 
 
    }
    