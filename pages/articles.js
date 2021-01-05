import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'


function Articles({ articles  }) {
 return <>
 <ArticleList articles={{articles }} />
 </>
 
}
Articles.getInitialProps = async ctx  => {
const url = 'http://localhost:3000/api/articles';
const response = await axios.get(url);
return response.data.reverse()
}
 

 
export default Articles;

