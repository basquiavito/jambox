import axios from 'axios'
import PrimeSummary from '../components/Prime/PrimeSummary'

import baseUrl from '../utils/baseUrl'


function Prime({ primes }) {
 
  return (
  
  <>
  <PrimeSummary {...primes}/>

  </>
  )
}

Prime.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.vercel.app/api/prime`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {primes: response.data}
 
}

export default Prime;