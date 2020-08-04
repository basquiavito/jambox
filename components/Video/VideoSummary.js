import React, {useState} from 'react'
import Link from 'next/link'
import Label from '../../components/units/label'
 import Title from '../../components/units/maintitle'
import Dekk from '../../components/units/dekk'
import Authordate from '../../components/units/authordate'
import Youtubehooks from '../../components/units/youtubehooks'
 import Content from '../../components/units/content'
 import LazyLoad from 'react-lazy-load';
import Twitter from '../../components/units/twitter'
function VideoSummary({  twitterToken, title, author, label, videoId, dekk, contentA, date, label1, title1, dekk1, content1  }) {



return (
 <>
 
 
 
<div className="editorialContainer">
  <div className="pageGrid">
    <div className="gridCenter">
    <Label label={label} />
 
 <Title title={title} /> 
 
 <Dekk dekk={dekk}/>
 
 <Authordate author={author} date={date}/> <br/>

 <LazyLoad>
 <Youtubehooks videoIdA={videoId} />
 </LazyLoad>

 <Content 
 contentA={contentA}
/>
 
 <Twitter token={twitterToken}/>
 
 
 
 
 
 



    </div>
  </div>


</div>   
<style jsx>


  {`
  
   
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}
  
  .gridCenter{
    grid-column: center-start / center-end;
 }
  
 button {
  width:60px; 
   color: rgb(0, 0, 0);
   overflow-wrap: break-word;
   word-break: break-word;
   background-color: transparent;
   cursor: pointer;
   display: inline-block;
   font-family: Programme, sans-serif;
   font-size: 0.575rem;
   line-height: 1;
   text-align: center;
   vertical-align: top;
   user-select: none;
   -webkit-appearance: none;
   text-transform: uppercase;
   letter-spacing: 1px;
   border-color: rgb(0, 0, 0);
   transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
   border-width: 1px;
 
   border-radius: 5px;
   margin-right: 5px;
   padding: 3px; 
}
  `}
</style>
</>
 
  )
}

export default VideoSummary;
