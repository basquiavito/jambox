import React from 'react'
import axios from 'axios'
import ProfileList from '../../components/Index/ProfileList'
import baseUrl from '../../utils/baseUrl'
import ProfilePagination from '../../components/Index/ProfilePagination'


function Actives({ profiles, totalPages }) {
 return <>

 
 <ProfileList profiles={profiles} />
 
 </>
}
Actives.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;
  const url = `https://hoopscript.vercel.app/api/profiles`;
  const payload = { params: { page, size }}
  const response = await axios.get(url, payload);
  return  response.data 
}
 

 
export default Actives;


 
