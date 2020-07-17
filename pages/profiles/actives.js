import React from 'react'
import axios from 'axios'
import ProfileList from '../../components/Index/ProfileList'
import baseUrl from '../../utils/baseUrl'

function Profiles({ profiles }) {
 return <ProfileList profiles={profiles} />
 
}
Profiles.getInitialProps = async () => {
  const url = `${baseUrl}/api/profiles`
  const response = await axios.get(url);
  return { profiles: response.data }
}
 

 
export default Profiles;


 
