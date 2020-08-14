import axios from 'axios'
import AirSummary from '../components/Air/AirSummary'
import baseUrl from '../utils/baseUrl'
 


function Air({ airs }) {
 
  return (
  
  <>
  <AirSummary {...airs}/>

  </>
  )
}

Air.getInitialProps = async ({ query: { _id } }) => {
const url = `${baseUrl}/api/air`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {airs: response.data}
 
}

export default Air;