import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'
import Spotlight from '../components/units/spotlight'

function Articles({ articles, totalPages  }) {
 return <>
   <div className="pageGrid">
    <div className="gridCenter"></div>
 <Spotlight title="Kevin Durant still dope" id="LD_qNB2NTco" />
 <br/>

 
 </div>
  <ArticleList articles={articles } />

 
 <ArticlePagination totalPages={totalPages}  />
 

 <style jsx>
{`

 
 .lomoName {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 14px; 
 }


`}
 </style>
 
 </>
 
}
Articles.getInitialProps = async ctx  => {
const page = ctx.query.page ? ctx.query.page : "1"
const size="2"
const url = 'https://hoopscript.com/api/articles';
const payload = { params: { page, size } }
const response = await axios.get(url, payload);
return response.data
}
 

 
export default Articles;