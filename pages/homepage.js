import React from 'react'
import axios from 'axios'
import ProfileList from '../components/Index/ProfileList'
import baseUrl from '../utils/baseUrl'
import ArticleList from '../components/Index/ArticleList'
function Homepage({ articles }) {

 return <ArticleList articles={articles} />
 
}
Homepage.getInitialProps = async () => {
  const url = `https://hoopscript.vercel.app/api/articles`
  const response = await axios.get(url);
  return { articles: response.data }
}
 

 
export default Homepage;
