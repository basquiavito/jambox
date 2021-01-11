import NextHead from 'next/head';
import { string } from 'prop-types';
import React from 'react';



export const Head = props => (
  <NextHead>
<meta charset="UTF-8" />
   <title>Home - Hoopscript</title>
   <meta name="description" content="The young person’s guide to mastering the world of basketball. hooperOS covers the latest in basketball news, stats, highlights, notation, learning, rumors,  and entertainment."/>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
 <meta name="msapplication-tap-highlight" content="no"/> <meta name="robots" content="index, follow"/>
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
 
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
    />
    <link rel="stylesheet" href="instantsearch.css" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;