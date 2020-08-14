import axios from 'axios'
import AirSummary from '../../components/Air/AirSummary'
 
 


function Air({ airs }) {
 
  return (
  
  <>
  <AirSummary {...airs}/>

  </>
  )
}

Air.getInitialProps = async ({ query: { _id } }) => {
const url = `https://ww.hoopscript.vercel.app/api/air`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {airs: response.data}
 
}

export default Air;