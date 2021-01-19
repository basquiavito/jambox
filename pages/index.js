import App from '../components/app'
import React from 'react';
import KickerHub from '../components/units/kickerHub'
import Billboard64 from '../components/units/billboard64'
import Sectiontitle from '../components/units/sectiontitle'
import CodeHub from '../components/units/codeHub'
import Sectionsubtitle from '../components/units/sectionsubtitle'
import Head from 'next/head'


function home(){
  return <>
 <main>
 <Head>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="google-site-verification" content="3vPt_83gjgDlwNpSwqVFOgiUWnIP-sBphFQVu_wS6q0"/>


    <title>Home - Hooperos.com</title>
    <meta name="description" content="The young person’s guide to mastering the world of basketball. hooperOS covers the latest in basketball news, stats, highlights, notation, learning , rumors,  and entertainment."/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
  <meta name="msapplication-tap-highlight" content="no"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>  
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <link rel="canonical" href='https://hooperos.com/'/>

  <link rel="shortlink" href="https://www.hooperos.com/" />
  <link rel="dns-prefetch" href="//www.googletagservices.com"></link>
  <link rel="dns-prefetch" href="//www.google.com"/>
  <link rel="dns-prefetch" href="//connect.facebook.net"/>
  <link rel="dns-prefetch" href="//platform.twitter.com"/>
<link rel="dns-prefetch" href="//ajax.googleapis.com"/>
<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://hooperos.com/" />
    <meta property="og:title" content="Home - HOOPEROS.com" />
  <meta property="og:site_name" content="HOOPEROS"/>
    <meta
      property="og:description"
      content="The young person’s guide to mastering the world of basketball. hooperOS covers the latest in basketball news, stats, highlights, notation, learning, rumors,  and entertainment."/>
    <meta name="twitter:site" content="https://twitter.com/hooperos_NBA" />
  <meta name="twitter:creator" content="@hooperos_NBA"/>
  <meta name="twitter:site" content="@hooperos_NBA"/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="" />
    <meta property="og:image" content=""/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  
  
</Head>
 
  <div id="kickerHub">
<KickerHub />
</div> 

  <div id="codeHub">
  <CodeHub />
</div>  
<Sectiontitle title="Search"/>
  <div id="app">
   <App />
   </div>  


   </main>   

   <style jsx>
     {`
#codeHub {
  padding-right: 0.5rem;
}

     main, #codeHub, #kickerHub, #app {
      max-width: 38rem;
  
      margin: auto;
  
     }
    
     a {
       text-decoration: none;
 
     }
     
     `}
   </style>
  </>
  
}

export default home