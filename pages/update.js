import axios from 'axios'
import UpdateSummary  from '../components/Update/UpdateSummary'

import baseUrl from '../utils/baseUrl'


function Update({ updates }) {
 
  return (
  
  <>
  <UpdateSummary {...updates}/>

  </>
  )
}

Update.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.vercel.app/api/update`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {updates: response.data}
 
}

export default Update;