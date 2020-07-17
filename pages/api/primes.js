import connectDb from '../../utils/connectDb';
import Prime from '../../models/Prime'
 

connectDb()

export default async (req, res) => {
    const primes = await Prime.find()
    res.status(200).json(primes)
 
 
    }
    