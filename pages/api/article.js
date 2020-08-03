import Article from '../../models/Article'
import connectDb from '../../utils/connectDb';

connectDb()

export default async (req, res) => {
const { _id } = req.query
const articles = await Article.findOne({ _id } )
res.status(200).json(articles)
}