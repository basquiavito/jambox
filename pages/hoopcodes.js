 
import React from 'react'
import axios from 'axios'
import HoopcodeList from '../components/Index/HoopcodeList'
import baseUrl from '../utils/baseUrl'

function Hoopcodes({ hoopcodes }) {
 return <HoopcodeList hoopcodes={hoopcodes} />
 
}
Hoopcodes.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/hoopcodes`
  const response = await axios.get(url);
  return { hoopcodes: response.data }
}
 

 
export default Hoopcodes
