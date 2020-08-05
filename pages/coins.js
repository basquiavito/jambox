import CoinList from '../components/Index/CoinList'
import React from 'react'
import axios from 'axios'
 import baseUrl from '../utils/baseUrl'

function Coins({ coins }) {
 return <CoinList coins={coins} />
 
}
Coins.getInitialProps = async () => {
  const url = `https://hoopscript.com/api/coins`
  const response = await axios.get(url);
  return { coins: response.data }
}
 

 
export default Coins
