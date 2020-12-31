import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'


function Articles({ articles, totalPages  }) {
 return <>
 <ArticleList articles={{articles, totalPages }} />
 <ArticlePagination totalPages={totalPages}  />
 </>
 
}
Articles.getInitialProps = async ctx  => {
const page = ctx.query.page ? ctx.query.page : "1"
const size="1"
const url = 'http://localhost:3000/api/articles';
const payload = { params: { page, size } }
const response = await axios.get(url, payload);
return response.data
}
 

 
export default Articles;

