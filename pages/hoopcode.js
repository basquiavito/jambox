import axios from 'axios'
import HoopcodeSummary from '../components/Hoopcodes/HoopcodeSummary'
import baseUrl from '../utils/baseUrl'
 


function Hoopcode({ hoopcodes }) {
 
  return (
  
  <>
  <HoopcodeSummary {...hoopcodes}/>

  </>
  )
}

Hoopcode.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.vercel.app/api/hoopcode`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {hoopcodes: response.data}
 
}

export default Hoopcode;