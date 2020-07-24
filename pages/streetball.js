import axios from 'axios'
import StreetballSummary from '../components/Streetball/StreetballSummary'
 
import baseUrl from '../utils/baseUrl'


function Streetball({ streetballs }) {
 
  return (
  
  <>
  <StreetballSummary {...streetballs}/>
 
  </>
  )
}

Streetball.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.com/api/streetball`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {streetballs: response.data}
 
}

export default Streetball;