import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'
import Spotlight from '../components/units/spotlight'
import Head from 'next/head'



function Articles({ articles, totalPages  }) {
 return <>
<Head>
<meta charSet="UTF-8" />
    <title>Home - Hoopscript</title>
    <meta name="description" content="The young person’s guide to mastering the world of basketball. hooperOS covers the latest in basketball news, stats, highlights, notation, learning, rumors,  and entertainment."/>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
  <meta name="msapplication-tap-highlight" content="no"/>
  {/* <meta name="google-site-verification" content="3vPt_83gjgDlwNpSwqVFOgiUWnIP-sBphFQVu_wS6q0"/> */}
  <meta name="robots" content="index, follow"/>
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <link rel="canonical" href="https://www.hoopscript.com"/>
  <link rel="shortlink" href="https://www.hoopscript.com/" />
  <link rel="dns-prefetch" href="//www.google.com"/>
<link rel="dns-prefetch" href="//ajax.googleapis.com"/>
<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.hoopscript.com" />
    <meta property="og:title" content="" />
  <meta property="og:site_name" content="Hoopscript"/>
    <meta
      property="og:description"
      content="The young person’s guide to mastering the world of basketball. hooperOS covers the latest in basketball news, stats, highlights, notation, learning, rumors,  and entertainment."
    />

  
</Head>
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