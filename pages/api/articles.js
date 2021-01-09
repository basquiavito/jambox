import connectDb from '../../utils/connectDb';
import Article from '../../models/Article'


connectDb()

export default async (req, res) => {
const articles = await Article.find()
res.status(200).json(articles)


    }
