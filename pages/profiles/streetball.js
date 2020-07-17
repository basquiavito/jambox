import React from 'react'
import axios from 'axios'
import StreetballList from '../../components/Index/StreetballList'
import baseUrl from '../../utils/baseUrl'
 
function Streetballs ({ streetballs }) {
 return <>
 
 

 <StreetballList streetballs={streetballs}/>  
 </>
}
Streetballs.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/streetballs`
  const response = await axios.get(url);
  return { streetballs: response.data }
}
 

 
export default Streetballs;
