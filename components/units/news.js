import { Component } from "react";

 export default class News extends Component{
     static async getInitialProps(){
         const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
         const stories = await response.json();
 

return {  stories }
     }
     render(){
         return<>
po

         </>
     }
 }