import NextHead from 'next/head';
import { string } from 'prop-types';
import React from 'react';



export const Head = props => (
  <NextHead>
<meta charset="UTF-8" />
   <title>Search - Hoopscript</title>
   <meta name="description" content="A notation platform for die-hard basketball fans."/>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
 <meta name="msapplication-tap-highlight" content="no"/> <meta name="robots" content="index, follow"/>
 <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
 <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
 <link rel="canonical" href="https://www.hoopscript.com/search"/>
 <link rel="shortlink" href="https://www.hoopscript.com/search" />
 <link rel="dns-prefetch" href="//www.google.com"/>
<link rel="dns-prefetch" href="//ajax.googleapis.com"/>
<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
 <meta property="og:locale" content="en_US"/>
 <meta property="og:type" content="website"/>
   <meta property="og:url" content="https://www.hooperos.com/search" />
   <meta property="og:title" content="A notation platform for die-hard basketball fans." />
 <meta property="og:site_name" content="Hooperos Search"/>
   <meta
     property="og:description"
     content="A notation platform for die-hard basketball fans."
   />
 
 
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;