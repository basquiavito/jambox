import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'

function Articles({ articles }) {
 return <>
 <ArticleList articles={articles} />
 </>
 
}
Articles.getInitialProps = async () => {
const url = `https://hoopscript.com/api/articles`;
const response = await axios.get(url);
return { articles : response.data }
}
 

 
export default Articles;
