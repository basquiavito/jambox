import Iframe from '../units/iframe'
import Graf from '../units/grafws'
import SocialMedia from '../units/socialMedia'
import Trends from '../units/trends'
import Related from '../units/related'
import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import FacebookShareCount from  'react-share'
import Sm4Videos from '../units/sm4Videos'
import HyvorTalk from 'hyvor-talk-react'


export default function airs({string, hoopcode, hyvorId, rafo, spanish , _id, related, details, graf, title, value, cotorra, publishedAt, flow, flowTalk,     ttTitle,  ttdetails, ttname, ttyear, team, href, videoID, images, moment, commentary,  fecha, titulo,  obb,  subtitle, dekk, author, date,player    }){
  const [ lan, setLan ] = useState({
standard:[{title:title}],
graf:[{graf:graf, date:date}],
trends:[{A:"Related", B:"Videos"}],
  details:[

 {value:details[0], cotorra:related[0] },
 {value:details[1], cotorra:related[1] },
 {value:details[2], cotorra:related[2] },
 {value:details[3], cotorra:related[3] },
 {value:details[4], cotorra:related[4] },
 {value:details[5], cotorra:related[5] },



],
 
  })

  const switchSpanishHandler = ()=> {
    setLan({
      standard:[{title:titulo}],
      graf:[{graf:rafo, date:date}],
      trends:[{A:"Related", B:"Videos"}],
        details:[
      
       {value:details[0], cotorra:spanish[0] },
       {value:details[1], cotorra:spanish[1] },
       {value:details[2], cotorra:spanish[2] },
       {value:details[3], cotorra:spanish[3] },
       {value:details[4], cotorra:spanish[4] },
       {value:details[5], cotorra:spanish[5] },
      
      
      
      ],
       
        })
      }

      const switchEnglishHandler = ()=> {
        setLan({

          standard:[{title:title}],
          graf:[{graf:graf, date:date}],
          trends:[{A:"Related", B:"Videos"}],
            details:[
          
           {value:details[0], cotorra:related[0] },
           {value:details[1], cotorra:related[1] },
           {value:details[2], cotorra:related[2] },
           {value:details[3], cotorra:related[3] },
           {value:details[4], cotorra:related[4] },
           {value:details[5], cotorra:related[5] },
          
          
          
          ],
           
            })
          }


        
return <>
<Head>
<title>{title}</title>
 <meta property="og:image" content={`http://i.ytimg.com/vi/${value}/hqdefault.jpg`}></meta>
 <meta property="og:description" content={lan.standard[0].title}></meta>
 <meta property="og:title" content={lan.standard[0].title}></meta>
 <meta http-equiv="content-language" content="en-us"></meta>
<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@h00pscript" />
  <meta name="twitter:creator" content="@h00pscript"/>
  <meta property="twitter:description" content={lan.graf[0].graf}/>
  <meta property="twitter:domain" content="https://www.hoopscript.com"></meta>
  <meta property="og:url" content={`https://hoopscript.com//article?_id=${_id}`} />
  <meta property="twitter:title" content={lan.standard[0].title}></meta>
    <meta name="twitter:image:src" content={`http://i.ytimg.com/vi/${value}/hqdefault.jpg`} />
    <meta property="og:image" content={`http://i.ytimg.com/vi/${value}/hqdefault.jpg`}/>
    <meta data-rh="true" property="article:tag" content="Basketball, hoops"></meta>
    <meta data-rh="true" property="article:tag" content="NBA"></meta>
    <meta data-rh="true" property="article:tag" content="Ballislife"></meta>
    <meta data-rh="true" property="article:tag" content="slam"></meta>
    
    <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
    
    
</Head>
 
<main>
<div id="home">
 
<div className="pageGrid">
<div className="gridCenter">
<div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>Español </button>
    <button  className="buttonStyle" onClick={switchEnglishHandler}>English </button>
 </div>  

 
<Iframe string={string} hoopcode={hoopcode} title={lan.standard[0].title} value={value}/>
  

<Sm4Videos id={_id}/>
 <Graf graf={lan.graf[0].graf} date={lan.graf[0].date}/>
<Trends A={lan.trends[0].A} B={lan.trends[0].B}/>
 <Related 
value={lan.details[0].value}
cotorra={lan.details[0].cotorra}  

value1={lan.details[1].value}
cotorra1={lan.details[1].cotorra} 
   />
 
 <Related 
value={lan.details[2].value}
cotorra={lan.details[2].cotorra}  

value1={lan.details[3].value}
cotorra1={lan.details[3].cotorra} 
   />

<Related 
value={lan.details[4].value}
cotorra={lan.details[4].cotorra}  

value1={lan.details[5].value}
cotorra1={lan.details[5].cotorra} 
   />

 
</div></div>
 
<div className="comment-count-view">

{ /* Comment Counts */ }
<HyvorTalk.CommentCount 
  websiteId='1313'
  id={hyvorId}
/>

</div>


{ /* Load Comments now */ }
<HyvorTalk.Embed 
websiteId='1313'
id={hyvorId}
/>
 
 
<style jsx>
  {`

#buttons {
  text-align: center;
  background-color:transparent;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
   text-align: center;
}

 
 

  .fb-share-item {
    color: #999;
    display: inline;
    margin-right: 16px;
    width: 100%;
  }
  .fb-share-item a {
    text-decoration: none;
  }
  .smList {
    display: flex;
    padding: 0;
    list-style: none;
    
  }

   .shareButtons {
    color: #999;
 
    display: flex;
 flex-flow: row nowrap;
    flex-shrink: 0;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-size: 17px;
    margin-bottom: 5px;
   }

  .toolbarWrapper {
     flex-flow: row nowrap;
    width: calc(100% - 40px);
    max-width: 600px;
    margin-left: 20px;
    margin-right: 20px;
    border-top: 1px solid #ebebeb;
    padding-top: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

 
 
 
 
 a {
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  touch-action: manipulation;
 }
 
  
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}
  
  .gridCenter{
    grid-column: center-start / center-end;
 }
 
 
 .backHomelink{
  display: inline-block;
    Color: #7d0068;
    font-size: 16px;
    bordeR: 1px solid #ccc;
    padding: 5px;
 }
 
 
 
 #home {
   margin: 0;
   line-height: 1.71em;
   letter-spacing: normal;
   font-family: SangBleuRepublic,helvetica,sans-serif;
   font-size: 17px;
   font-weight: 400;
   font-style: normal;
   text-transform: none;
   background-color: #f7f7f3;
   
 }
 
  
 
  `}

</style>
</div>
</main>
  </>
 }