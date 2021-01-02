import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'
import Spotlight from '../components/units/spotlight'

function Articles({ articles, totalPages  }) {
 return <>
 
 <Spotlight title="Kevin Durant still dope" id="LD_qNB2NTco" /> 
  <br/>

 
  <h2 className="headline">Today's videos</h2>
  <ArticleList articles={articles } />

 
 <ArticlePagination totalPages={totalPages}  />
 

 <style jsx>
{`

.headline {
   -webkit-text-stroke-color: #ff294c;
   -webkit-text-stroke-width: 1px;
   color: transparent;
   margin-left: calc(((100vw - var(--window-width-offset)) - var(--container-width)) / -2);
   margin-right: calc(((100vw - var(--window-width-offset)) - var(--container-width)) / -2);
   padding-left: var(--outer-gutter);
   padding-right: var(--outer-gutter);
   font-family: Maria,sans-serif;
   font-size: 8.86667vw;
   line-height: .80597;
   text-align: center;
   text-transform: uppercase;
   word-wrap: break-word;
   margin-bottom: 45px;
  }
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
const size="4"
const url = 'https://hoopscript.com/api/articles';
const payload = { params: { page, size } }
const response = await axios.get(url, payload);
return response.data
}
 

 
export default Articles;