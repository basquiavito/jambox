import React, {useState} from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'
import Spotlight from '../components/units/spotlight'
import Head from 'next/head'
import Link from 'next/link'
 import Sectiontitle from '../components/units/sectiontitle'
import Socialcards from '../components/units/Socialcard'

function Home({ articles}) {
 const [ load, setLoad ] = useState({
     showMore: false
 })



 const loadMoreHandler = () => {
const doesShow = load.showMore;
setLoad({showMore: !doesShow})
 }
 return <>
<Head>
 <meta charset="UTF-8" />
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

<Link href="https://hoopscript.com/article?_id=5ff317ed6e6c200fac637b2b" >
  <a> <Spotlight 
 title="Luka Doncic 's first tripple-double of 2020-21" 
 id="-ThDqz_ecBY" 
 date="Jan 5, 2021"
 length="5:16 minutes"
 graf="Lukamania."
 /> 
  </a></Link>

  <br/>


 <div>
 <Sectiontitle title="Latest Airs"/>

  </div> <br/>


<div className="articles">
  <ArticleList articles={articles.slice(0,8).reverse() } />
  </div>
 <br/>

  <div className="buttonContainer">
 <button className="loadMoreContainer" onClick={loadMoreHandler}>Load More</button>
 </div>
 


{ load.showMore ?
 <div className="articles">

<br/>
  <ArticleList articles={articles.slice(4,16).reverse() } />
</div>: null }
  <hr/><br/>
<div>
 <Sectiontitle title="Ball Handling"/>

  </div> <br/>
<div className="articles">
  <ArticleList articles={articles.slice(0,8).reverse() } />
  </div>

  <div className="buttonContainer">
 <button className="loadMoreContainer" onClick={loadMoreHandler}>Load More</button>
 </div>
 <style jsx>
{`
.buttonContainer {
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    appearance: none;
    margin-bottom: 2.25rem;
    margin-top: 2.25rem;
}
.loadMoreContainer {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    padding: 0px 1rem;
    min-height: 0px;
    height: 50px;
    min-width: 2.5rem;
    transition-property: color, background, border;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    color: rgb(255, 255, 255);
    border-color: rgb(33, 33, 33);
    border-width: 2px;
    border-style: solid;
    background-color: rgb(33, 33, 33);
    text-transform: uppercase;
    font-family: BatonTurbo, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 700;
   
}
 
  #react-paginate ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  #react-paginate li {
    display: inline-block;
  }
  
 
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
Home.getInitialProps = async () => {
    //fetch data on server
    const url = 'https://hoopscript.com/api/articles'
     const response = await axios.get(url);
     return { articles : response.data };

}
 

 
export default Home;
