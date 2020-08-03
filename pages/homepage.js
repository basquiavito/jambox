import React from 'react'
import axios from 'axios'

import baseUrl from '../utils/baseUrl'
import ArticleList from '../components/Index/ArticleList'

function Homepage({ articles }) {

 return <ArticleList articles={articles} />
 
}
Homepage.getInitialProps = async () => {
  const url = `https://www.hoopscript.com/api/articles`
  const response = await axios.get(url);
  return { articles: response.data }
}
 

 
export default Homepage;
