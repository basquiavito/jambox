import React from 'react'
import axios from 'axios'
import ProfileList from '../../components/Index/ProfileList'
import baseUrl from '../../utils/baseUrl'
import Buttonup from '../../components/featured/buttonup'
function Actives({ profiles }) {
 return <>
 
 <h2>Hola</h2>
 <ProfileList profiles={profiles} />
  <div>p <Buttonup/></div>
 </>
}
Actives.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/profiles`;
  const response = await axios.get(url);
  return { profiles: response.data }
}
 

 
export default Actives;


 
