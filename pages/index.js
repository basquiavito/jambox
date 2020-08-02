import React from 'react'
import axios from 'axios'
import ProfileList from '../components/Index/ProfileList'
import baseUrl from '../utils/baseUrl'
import ArticleList from '../components/Index/ArticleList'
function index({ articles }) {
    
 return <ArticleList articles={articles} />
 
}
index.getInitialProps = async () => {
  const url = `${baseUrl}/api/articles`
  const response = await axios.get(url);
  return { articles: response.data }
}
 

 
export default index;
