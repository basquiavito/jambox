import App from '../components/app'
import React,{Component} from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom';
function home(){
  return <>
  <head>
 
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
    />
    <link rel="stylesheet" href="./static/algolia.css" />
    <link rel="stylesheet" href="./static/index.css" />

  </head>
   
<App />
      
  </>
  
}

export default home