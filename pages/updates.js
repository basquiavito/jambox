import UpdateList from '../components/Index/UpdateList'
import React from 'react'
import axios from 'axios'
 import baseUrl from '../utils/baseUrl'

function Updates({updates }) {
 return <UpdateList updates={updates} />
 
}
Updates.getInitialProps = async () => {
  const url = `${baseUrl}/api/updates`
  const response = await axios.get(url);
  return { updates: response.data }
}
 

 
export default Updates
