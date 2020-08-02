// import React from 'react'
// import axios from 'axios'
// import ProfileList from '../../components/Index/ProfileList'
// import baseUrl from '../../utils/baseUrl'
// import ProfilePagination from '../../components/Index/ProfilePagination'
// import Head from 'next/head'
// import Search from '../../components/search'



// function Actives({ profiles, totalPages }) {
//  return <>
 

//  <ProfileList profiles={profiles} ></ProfileList>
 
//  </>
// }
// Actives.getInitialProps = async ctx => {
//   const page = ctx.query.page ? ctx.query.page : "1";
//   const size = 240;
//   const url = `https://hoopscript.vercel.app/api/profiles`;
//   const payload = { params: { page, size }}
//   const response = await axios.get(url, payload);
//   return  response.data 
// }
 

 
//export default Actives;


 
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
