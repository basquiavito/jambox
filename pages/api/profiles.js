
import connectDb from '../../utils/connectDb'
import Profile from '../../models/Profile'
 
 
connectDb()
 
 
 
export default async (req, res) => {
    const { page, size } = req.query
    const pageNum = Number(page)
    const pageSize = Number(size)
    let profiles = [];
    const totalDocs = await Profile.countDocuments()
    const totalPages = Math.ceil(totalDocs / pageSize)
    if (pageNum === 1) {
    profiles = await Profile.find().limit(pageSize);
    } else {
        const skips = pageSize * (pageNum - 1)
        profiles = await Profile.find()
        .skip(skips)
        .limit(pageSize)
    }
//const profiles = await Profile.find()
res.status(200).json({ profiles, totalPages })
 
}

