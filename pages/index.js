import React, {useState} from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'
import Spotlight from '../components/units/spotlight'
import Head from 'next/head'
import Link from 'next/link'
 import Sectiontitle from '../components/units/sectiontitle'
import Buscar from '../components/units/buscar'
import searchStyles from '../static/search.module.css'





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
 

 <ArticleList articles={articles} />

 </>
 
}
Home.getInitialProps = async () => {
    //fetch data on server
    const url = 'https://hoopscript.com/api/articles'
     const response = await axios.get(url);
     return { articles : response.data.reverse() };

}
 

 
export default Home;