import React from 'react'
import axios from 'axios'
import StreetballList from '../../components/Index/StreetballList'
import baseUrl from '../../utils/baseUrl'
import Buttonup from '../../components/featured/buttonup'
 
function Streetballs ({ streetballs }) {
 return <>
 <StreetballList streetballs={streetballs}/>  
 <Buttonup/>
 </>
}
Streetballs.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/streetballs`
  const response = await axios.get(url);
  return { streetballs: response.data }
}
 

 
export default Streetballs;
