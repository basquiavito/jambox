import React from 'react'
import axios from 'axios'
import ProfileList from '../components/Index/ProfileList'
import baseUrl from '../utils/baseUrl'
import ArticleList from '../components/Index/ArticleList'
import Homepage from './homepage'

 
export default function Home(){

}


Home.getInitialProps = ({ res }) => {

  if (res) {
    res.writeHead(301, {
      Location: '/homepage'
    });
    res.end();


  }}
 

 
 