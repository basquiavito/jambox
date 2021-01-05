import connectDb from '../../utils/connectDb';
import Article from '../../models/Article'


connectDb()

export default async (req, res) => {
    const { page, size } = req.query
    const pageNum = Number(page)
    const pageSize = Number(size)
    let articles = []
    const totalDocs = await Article.countDocuments()
    const totalPages = Math.ceil(totalDocs / pageSize)
    if ( pageNum === 1 ) {
       articles =  await Article.find().limit(pageSize);

    } else {
     const skips = pageSize * (pageNum - 1)
     articles = await Article.find()
     .skip(skips)
     .limit(pageSize)
    }
    // const articles = await Article.find()
    res.status(200).json({articles, totalPages })


    }