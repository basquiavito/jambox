import axios from 'axios'
import CoinSummary from '../components/Coin/CoinSummary'

import baseUrl from '../utils/baseUrl'


function Coin({ coins }) {
 
  return (
  
  <>
  <CoinSummary {...coins}/>

  </>
  )
}

Coin.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.com/api/coin`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {coins: response.data}
 
}

export default Coin;