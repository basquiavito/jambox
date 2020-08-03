import axios from 'axios'
import VideoSummary from '../components/Video/VideoSummary'

import baseUrl from '../utils/baseUrl'


function Video({ videos }) {
 
  return (
  
  <>
  <VideoSummary {...videos}/>

  </>
  )
}

Video.getInitialProps = async ({ query: { _id } }) => {
const url = `${baseUrl}/api/video`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {videos: response.data}
 
}

export default Video;