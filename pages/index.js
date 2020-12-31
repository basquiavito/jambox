import React from 'react'
import axios from 'axios'
import ArticleList from '../components/Index/ArticleList'
import baseUrl from '../utils/baseUrl'
import ArticlePagination from '../components/Index/ArticlePagination'


function Articles({ articles, totalPages  }) {
 return <>

 <ArticleList articles={articles } />

 
 <ArticlePagination totalPages={totalPages}  />
 
 </>
 
}
Articles.getInitialProps = async ctx  => {
const page = ctx.query.page ? ctx.query.page : "1"
const size="2"
const url = 'https://hoopscript.com/api/articles';
const payload = { params: { page, size } }
const response = await axios.get(url, payload);
return response.data
}
 

 
export default Articles;



// import Head from 'next/head'
// import Nefbox from '../components/units/nefbox'
// import Sectiontitle from '../components/units/sectiontitle'
// import Sectionsubtitle from '../components/units/sectionsubtitle'
// import BlackSectiontitle from '../components/units/blackSectionTitle'
// import React,{useState} from 'react'
// import Label from '../components/units/label'
// import Title from '../components/units/title'
// import Authordate from '../components/units/authordate'
// import ImageHolder from '../components/units/imageHolder'
// import Link from 'next/link'
// import Dekk from '../components/units/dekk'
// import Maintitle from '../components/units/maintitle'
// import Coderow from '../components/units/coderow'
// import Blacklabel from '../components/units/blackLabel'
// import MediaUrlFull from '../components/units/mediaUrlFull'
// import LazyLoad from 'react-lazy-load';

 
// export default function Home() {

 
//   const [ headline, setHeadline] = useState({
//     headline:[
//     {
//     label: 'Pampara',
//     maintitle:"Doncic's triple-double. Matan a los Kings en overtime. | Record 30-20-10 line | 16th triple-double ",
//     dekk:"Luka Doncic Marco un historico triple doble al encestar un tiro de desempate faltando 1:57 en el tiempo extra. Lidero a Dallas en pasar a los Kings de Sacramento, 114-110.",
//     author:'Richard Clemons',
//     date:"Jul 05, 2020 Aug. 5, 2020 7:39 AM ET"
//   },
//   {
//     label: 'Picante',
//     maintitle:"Booker anoto al expirar el tiempo liderando a los Suns sobre los Clippers 117-115",
//    date:"Aug. 5, 2020 6:39 AM ET",
//     author:'Jiffy Hogan'
//   },

//   {
//     label: 'HOT',
//     maintitle:'Warren y sus dedos calientes ayudaron a pasar a los Magic para la tercera victoria consecutiva de los Pacers.',
//     date:"Aug. 5, 2020 12:39 AM ET",
//     author:'Julian Ortiz'
//   }],
// //     charts: [
// //   {codeTitle:'Iverson Crossed Jordan', hoopcodes:'013 013 180 FG$ | DOUBLE PiCASSO + base   '},
// //   {codeTitle:'Trae Young Nutmeg', hoopcodes:'809 N FG$'},
// //   {codeTitle:'Luka Doncic Steb Back', hoopcodes:'806 FG$'},
// //   {codeTitle:'Damian Lillard explosive Spin Move', hoopcodes:'870 180 FG$'},
// //   {codeTitle:'Lonzo Ball Crossover', hoopcodes:'018 FG$'}
// // ],
// videos:[
//   {label:'On Fire',title:"Carmelo Anthony 's clutch tiro de tres para ayudar a Portland a vencer 110-102 a Houston.", author:'Pat Mcguire', date:'Aug. 5, 2020 7:36 AM ET'},
//   {label:'Rookie Alert',title:'Michael Porter Jr. 37 Pts, 12 Reb | Un novato que esta dando agua de beber en Denver', author:'Jay Ortiz', date:'Jul 23, 2020'},
//   {label:'Passing',title:'Fred VanVleet 36 Pts. Mas alta anotacion de su carrera. Toronto sigue sorprendiendo al mundo. ',    author:'Jiffy Hogan', date:'Jul 23, 2020'},
//   {label:'Defense',title:'Shake Milton para ganar! 16 PTS | Que Simmons de que?',   author:'Jay Ortiz', date:'Jul 23, 2020'},
//   {label:'rookie alert',title:'Ja Morant 25 Points 9 Ast 9 Reb " ROY, a terror!!" ', dekk:'Bol Bol jugo modo Opal.',  author:'Richard Clemons', date:'Jul 23, 2020'}
// ],
// // versus:[
// //   {codeTitle:' Kobe vs Jordan', hoopcodes:'Fadeaway'},
// //   {codeTitle:'Luka vs Harden', hoopcodes:'Step Back'},
// //   {codeTitle:'Duncan vs Olajuwon', hoopcodes:'Post up'},
// //   {codeTitle:'Kidd vs Stockton', hoopcodes:'Passing'},
// //   {codeTitle:'Mutombo vs Mourning', hoopcodes:'Defense'}
// // ],
// headings:[
//   {title:'Hoopcodes', subtitle:'Code of the Week'},
//   {title:'Videos', subtitle:'Latest Videos'},
//   {title:'Versuz', subtitle:'Who you Got?'}
// ]

// })
 
//   return <>
// <Head>
// <meta charset="utf-8"/>
// <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
// <title>Hoopscript: NBA plays notation, news &amp top plays, Hoop 24/7  </title>
    
// <meta name="viewport" content="width=device-width, initial-scale=1"/>

// <meta name="description" content="El sitio oficial de los Hooperos. Tu destino para ver  articulos, anotaciones, perfiles, versuz, videos y más de los jugadores y equipos de la NBA." />
// <meta name="robots" content="index, follow"/>
// <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
// <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>

// <link rel="canonical" href="https://www.hoopscript.com/"/>
// <meta property="og:locale" content="en_US"></meta>
// <meta property="og:type" content="website"></meta>
// <meta property="og:title" content="Hoopscript: NBA plays notation, news &amp top plays, Hoop 24/7  "></meta>
// <meta property="og:url" content="https://www.hoopscript.com/"></meta>
// <meta property="og:site_name" content="HOOPSCRIPT"></meta>
// <meta property="article:publisher" content="https://www.facebook.com/hoopscript"></meta>
// <meta name="twitter:card" content="summary_large_image"></meta>
// <meta name="twitter:creator" content="@hoopscript_live"></meta>
// <meta name="twitter:site" content="@hoopscript_live"></meta>

// <link rel="dns-prefetch" href="//www.google.com"/>
// <link rel="dns-prefetch" href="//ajax.googleapis.com"/>
// <link rel="dns-prefetch" href="//fonts.googleapis.com"/>


// <link rel="shortlink" href="https://www.hoopscript.com/" />

 
// <meta name="parsely-link" content="https://www.hoopscript.com/"></meta>
// <meta name="parsely-section" content="homepage"></meta>
// </Head>
// <div id="container">


// <div id="featured">
// <div className="pageGrid">
// <div className="gridCenter">

 
//   <div className="editorialPlacementContainer">
 

//  <a href="/article?_id=5f2a217deb1efbad18e320ac" className="editorialPlacementLink">
// <div className="editorialPlacementHeader">
// <Label label={headline.headline[0].label}/>
// <Maintitle title={headline.headline[0].maintitle}/> 
// <Dekk dekk={headline.headline[0].dekk}/>
// <Authordate author={headline.headline[0].author} date={headline.headline[0].date}/>
// <LazyLoad>
// <ImageHolder mediaUrl="http://i.ytimg.com/vi/7FiIGk4PQb4/hqdefault.jpg"/>
// </LazyLoad>


// </div></a> 

    

//  <a href="/article?_id=5f2a2ff6eb1efbad18e320ad">
// <Label label={headline.headline[1].label}/>
// <LazyLoad>
// <ImageHolder mediaUrl="http://i.ytimg.com/vi/uA3SPJdGo78/hqdefault.jpg"/>
// </LazyLoad>
// <Maintitle title={headline.headline[1].maintitle}/><br/>
// <Authordate author={headline.headline[1].author} date={headline.headline[1].date}/>

//     </a> 

//   <a href="/article?_id=5f2821c70a0640e2c6f449a7">
//  <Label label={headline.headline[2].label}/>
// <LazyLoad>
//  <ImageHolder mediaUrl="http://i.ytimg.com/vi/Fi1CMuofmC4/hqdefault.jpg"/>
//  </LazyLoad>
//  <Maintitle title={headline.headline[2].maintitle}/><br/>
//  <Authordate author={headline.headline[2].author} date={headline.headline[2].date}/>

//      </a> 

//   </div>

// </div>  </div></div><br/>
// {/* 



// <div id="charts">
// <div className="pageGrid">
// <div className="gridCenter">
// <Sectiontitle title={headline.headings[0].title} />
// <Sectionsubtitle subtitle = {headline.headings[0].subtitle} />
// <Link href="/hoopcode?_id=5eb5ea710f258495bf4845ca"><a><Coderow rank="1" codeTitle={headline.charts[0].codeTitle} hoopcodes={headline.charts[0].hoopcodes} image="http://i.ytimg.com/vi/c_2y8SBAAHI/hqdefault.jpg"/></a></Link>
// <Link href="/hoopcode?_id=5eb5ea710f258495bf4845cb"><a><Coderow rank="2" codeTitle={headline.charts[1].codeTitle} hoopcodes={headline.charts[1].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/hoopcode?_id=5eb5ea710f258495bf4845ce"><a><Coderow rank="3" codeTitle={headline.charts[2].codeTitle} hoopcodes={headline.charts[2].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/hoopcode?_id=5ec7aebcc832db8bea3706a5"><a><Coderow rank="4" codeTitle={headline.charts[3].codeTitle} hoopcodes={headline.charts[3].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/hoopcode?_id=5ec7aebcc832db8bea3706a5"><a><Coderow rank="5" codeTitle={headline.charts[4].codeTitle} hoopcodes={headline.charts[4].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>

// </div></div></div> */}
     

// <div id="video">
// <div className="pageGrid">
// <div className="gridCenter">
// <BlackSectiontitle title= {headline.headings[1].title} />
// <Sectionsubtitle subtitle={headline.headings[1].subtitle} />
 

// <a href="/video?_id=5f285b4311bc31dbcb85d0be" className="linkContainer">

// <Blacklabel label={headline.videos[0].label}/>
 
// <Title title={headline.videos[0].title}/>
// <Dekk dekk={headline.videos[0].dekk}/>
// <Authordate author={headline.videos[0].author} date={headline.videos[0].date} />
// <MediaUrlFull mediaUrl="http://i.ytimg.com/vi/9NCi6rckwQ4/hqdefault.jpg"/>

// </a>
 
//   <a href="/video?_id=5f285b4311bc31dbcb85d0be" className="linkContainer">
//     <Blacklabel label={headline.videos[1].label}/>
//     <LazyLoad>
// <MediaUrlFull mediaUrl="http://i.ytimg.com/vi/_EtXWZ6dn8I/hqdefault.jpg" />
// </LazyLoad>
// <Title title={headline.videos[1].title}/>
// <Authordate author={headline.videos[1].author} date={headline.videos[1].date} />
//         </a> 

//  <a  href="/video?_id=5f285b5d11bc31dbcb85d0c0">
// <Blacklabel label={headline.videos[2].label}/>
// <LazyLoad>
// <MediaUrlFull mediaUrl=" http://i.ytimg.com/vi/Ho9PaI6ApMQ/hqdefault.jpg" />
// </LazyLoad>
// <Title title={headline.videos[2].title}/>
// <Authordate author={headline.videos[2].author} date={headline.videos[2].date} />
//     </a> 

//   <a href="/video?_id=5f288d9211bc31dbcb85d0c1"> 
// <Blacklabel label={headline.videos[3].label}/>
// <LazyLoad>
// <MediaUrlFull mediaUrl="http://i.ytimg.com/vi/2-f2XEAfmy8/hqdefault.jpg" />
// </LazyLoad>
// <Title title={headline.videos[3].title}/>
// <Authordate author={headline.videos[3].author} date={headline.videos[3].date} />
//     </a> 

//   <a href="/video?_id=5f288da611bc31dbcb85d0c2"> 
// <Blacklabel label={headline.videos[4].label}/>
// <LazyLoad>
// <MediaUrlFull mediaUrl="http://i.ytimg.com/vi/9Inz8a7mp1w/hqdefault.jpg" />
// </LazyLoad>
// <Title title={headline.videos[4].title}/>
// <Authordate author={headline.videos[4].author} date={headline.videos[4].date} /></a>

 

 
// </div></div></div>

// {/* <div id="topTen">
// <div className="pageGrid">
// <div className="gridCenter">
// <Sectiontitle title={headline.headings[2].title} />
// <Sectionsubtitle subtitle={headline.headings[2].subtitle} />

// <Link href="/coin?_id=5f2899c611bc31dbcb85d0cb"><a><Coderow rank="1" codeTitle={headline.versus[0].codeTitle} hoopcodes={headline.versus[0].hoopcodes} image="http://i.ytimg.com/vi/c_2y8SBAAHI/hqdefault.jpg"/></a></Link>
// <Link href="/coin?_id=5f2899d911bc31dbcb85d0cc"><a><Coderow rank="2" codeTitle={headline.versus[1].codeTitle} hoopcodes={headline.versus[1].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/coin?_id=5f289cc011bc31dbcb85d0cd"><a><Coderow rank="3" codeTitle={headline.versus[2].codeTitle} hoopcodes={headline.versus[2].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/coin?_id=5f289e7c11bc31dbcb85d0ce"><a><Coderow rank="4" codeTitle={headline.versus[3].codeTitle} hoopcodes={headline.versus[3].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
// <Link href="/coin?_id=5f289e9b11bc31dbcb85d0cf"><a><Coderow rank="5" codeTitle={headline.versus[4].codeTitle} hoopcodes={headline.versus[4].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>

 
// </div></div></div> */}


//       </div>
 
//      <style jsx>



//        {`
// #featured {
//   background-color: rgb(255, 255, 255);
//   padding: 2.25rem 0px 0px;

// }
//        #video {

//         background-color: rgb(18, 18, 18);
//     padding: 2.25rem 0px;
//     color: #fff;
//        }
       
//        .pageGrid{
//         display: grid;
//         -webkit-box-pack: center;
//         justify-content: center;
//         grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
//         grid-row-gap: 30px;
        
    
//     }
//        .gridCenter{
//           grid-column: center-start / center-end;
//        }
       
//        .editorialPlacementContainer{
//         color: rgb(0, 0, 0);
//         font-weight: 100;
//         line-height: 1.125;
//         height: 100%;
//         min-height: inherit;
//        }
//        #buttons{
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//     margin-right: 0.5rem;
//     }
//     button {
//         width:60px; 
//          color: rgb(0, 0, 0);
//          overflow-wrap: break-word;
//          word-break: break-word;
//          background-color: transparent;
//          cursor: pointer;
//          display: inline-block;
//          font-family: Programme, sans-serif;
//          font-size: 0.575rem;
//          line-height: 1;
//          text-align: center;
//          vertical-align: top;
//          user-select: none;
//          -webkit-appearance: none;
//          text-transform: uppercase;
//          letter-spacing: 1px;
//          border-color: rgb(0, 0, 0);
//          transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
//          border-width: 1px;
       
//          border-radius: 5px;
//          margin-right: 5px;
//          padding: 3px; 
//     }
//        a {
//            text-decoration: none;
//            color: #000;
//        } 
        
//        .pageGridFull{
//         grid-column: grid-start / grid-end;
//        }
        
//         .editorialPlacementLink{
//             color: inherit;
//             display: flex;
//             flex-direction: column;
//             height: 100%;
//             min-height: inherit; 
//         }
    
//         .editorialPlacementHeader{
//             margin-bottom: 1rem; 
//         }
//         #video  a {
//           color:#fff;
//         }

        
//        `}
//      </style>
//   </>
// }

