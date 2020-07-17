import axios from 'axios'
import ProfileSummary from '../components/Profile/ProfileSummary'

import baseUrl from '../utils/baseUrl'


function Profile({ profiles }) {
 
  return (
  
  <>
 
  <ProfileSummary {...profiles}/>
 
  </>
  )
}

Profile.getInitialProps = async ({ query: { _id } }) => {
const url = `${baseUrl}/api/profile`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {profiles: response.data}
 
}

export default Profile;
