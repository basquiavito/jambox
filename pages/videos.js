 import VideoList from '../components/Index/VideoList'
import React from 'react'
import axios from 'axios'
 import baseUrl from '../utils/baseUrl'

function Videos({ videos }) {
 return <VideoList videos={videos} />
 
}
Videos.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/videos`
  const response = await axios.get(url);
  return { videos: response.data }
}
 

 
export default Videos
