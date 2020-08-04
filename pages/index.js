import Head from 'next/head'

import Sectiontitle from '../components/units/sectiontitle'
import Sectionsubtitle from '../components/units/sectionsubtitle'
import BlackSectiontitle from '../components/units/blackSectionTitle'
import React,{useState} from 'react'
import Label from '../components/units/label'
import Title from '../components/units/title'
import Authordate from '../components/units/authordate'
import ImageHolder from '../components/units/imageHolder'
import Link from 'next/link'
import Dekk from '../components/units/dekk'
import Maintitle from '../components/units/maintitle'
import Coderow from '../components/units/coderow'
import Blacklabel from '../components/units/blackLabel'
import MediaUrlFull from '../components/units/mediaUrlFull'
 

 
export default function Home() {

 
  const [ headline, setHeadline] = useState({
    headline:[
    {
    label: 'Pampara',
    maintitle:'Anthony Davis tuvo 42 puntos en la victoria de los Lakers. ',
    dekk:"Anthony Davis tenia ya 24 puntos en la mitad. Marcando la vez numero 20 que logra dicha hazana. ",
    author:'Richard Clemons',
    date:"Jul 04, 2020"
  },
  {
    label: 'Picante',
    maintitle:"Warren anoto 34 mas, liderando a los pacers a pasarle a los Wizards, 111-100.",
   date:"Jul 04, 2020",
    author:'Jiffy Hogan'
  },

  {
    label: 'Rookie Alert',
    maintitle:'Zion Williamson con 23 puntos y 5 asistencias. Lo dejaron jugar un poco mas esta vez.”',
    date:"Jul 04, 2020",
    author:'Julian Ortiz'
  }],
//     charts: [
//   {codeTitle:'Iverson Crossed Jordan', hoopcodes:'013 013 180 FG$ | DOUBLE PiCASSO + base   '},
//   {codeTitle:'Trae Young Nutmeg', hoopcodes:'809 N FG$'},
//   {codeTitle:'Luka Doncic Steb Back', hoopcodes:'806 FG$'},
//   {codeTitle:'Damian Lillard explosive Spin Move', hoopcodes:'870 180 FG$'},
//   {codeTitle:'Lonzo Ball Crossover', hoopcodes:'018 FG$'}
// ],
videos:[
  {label:'On Fire',title:'Jayson Tatum 34 pts, 8 Ast -- Despues de encestar solo 5 en el juego pasado, Tatum vino rabioso. Hay bobo', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Rookie Alert',title:'Michael Porter Jr. 37 Pts, 12 Reb | Un novato que esta dando agua de beber en Denver', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Passing',title:'Fred VanVleet 36 Pts. Mas alta anotacion de su carrera. Toronto sigue sorprendiendo al mundo. ',    author:'Jiffy Hogan', date:'Jul 23, 2020'},
  {label:'Defense',title:'Shake Milton para ganar! 16 PTS | Que Simmons de que?',   author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'rookie alert',title:'Ja Morant 25 Points 9 Ast 9 Reb " ROY, a terror!!" ', dekk:'Bol Bol jugo modo Opal.',  author:'Richard Clemons', date:'Jul 23, 2020'}
],
// versus:[
//   {codeTitle:' Kobe vs Jordan', hoopcodes:'Fadeaway'},
//   {codeTitle:'Luka vs Harden', hoopcodes:'Step Back'},
//   {codeTitle:'Duncan vs Olajuwon', hoopcodes:'Post up'},
//   {codeTitle:'Kidd vs Stockton', hoopcodes:'Passing'},
//   {codeTitle:'Mutombo vs Mourning', hoopcodes:'Defense'}
// ],
headings:[
  {title:'Hoopcodes', subtitle:'Code of the Week'},
  {title:'Videos', subtitle:'Latest Videos'},
  {title:'Versuz', subtitle:'Who you Got?'}
]

})
 
  return <>
<Head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
<title>Basketball Notation, news, profiles and more | Hoopscript</title>
<meta name="msapplication-tap-highlight" content="no"></meta>   
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"></meta>
<link rel="canonical" href="https://www.hoopscript.com/"></link>
 
<meta name="author" contnet></meta>
<meta name="copyright" content="Copyright © 64 projects 2020"/>
<meta name="description" content="homepage | The latest tips and advice for fans on basketball news, ball-handling, scoring."></meta>
<meta name="parsely-link" content="https://www.hoopscript.com/"></meta>
<meta name="parsely-section" content="homepage"></meta>










</Head>
<div id="container">


<div id="featured">
<div className="pageGrid">
<div className="gridCenter">
  <div className="editorialPlacementContainer">
 

<Link href="/article?_id=5f2741a6b2d26bc5a9804068"><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label={headline.headline[0].label}/>
<Maintitle title={headline.headline[0].maintitle}/> 
<Dekk dekk={headline.headline[0].dekk}/>
<Authordate author={headline.headline[0].author} date={headline.headline[0].date}/>

<ImageHolder mediaUrl="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/>
 


</div></a></Link>

    

<Link href="/article?_id=5f2745f8b2d26bc5a980406b"><a>
<Label label={headline.headline[1].label}/>
<ImageHolder mediaUrl="http://i.ytimg.com/vi/P-jzeKWhgIg/hqdefault.jpg"/>
<Maintitle title={headline.headline[1].maintitle}/><br/>
<Authordate author={headline.headline[1].author} date={headline.headline[1].date}/>

    </a></Link>

     <Link href="/article?_id=5f2821c70a0640e2c6f449a7"><a>
 <Label label={headline.headline[2].label}/>
 <ImageHolder mediaUrl="http://i.ytimg.com/vi/_ylvWAs2zbk/hqdefault.jpg"/>
 <Maintitle title={headline.headline[2].maintitle}/><br/>
 <Authordate author={headline.headline[2].author} date={headline.headline[2].date}/>

     </a></Link> 

  </div>

</div>  </div></div><br/>
{/* 



<div id="charts">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title={headline.headings[0].title} />
<Sectionsubtitle subtitle = {headline.headings[0].subtitle} />
<Link href="/hoopcode?_id=5eb5ea710f258495bf4845ca"><a><Coderow rank="1" codeTitle={headline.charts[0].codeTitle} hoopcodes={headline.charts[0].hoopcodes} image="http://i.ytimg.com/vi/c_2y8SBAAHI/hqdefault.jpg"/></a></Link>
<Link href="/hoopcode?_id=5eb5ea710f258495bf4845cb"><a><Coderow rank="2" codeTitle={headline.charts[1].codeTitle} hoopcodes={headline.charts[1].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/hoopcode?_id=5eb5ea710f258495bf4845ce"><a><Coderow rank="3" codeTitle={headline.charts[2].codeTitle} hoopcodes={headline.charts[2].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/hoopcode?_id=5ec7aebcc832db8bea3706a5"><a><Coderow rank="4" codeTitle={headline.charts[3].codeTitle} hoopcodes={headline.charts[3].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/hoopcode?_id=5ec7aebcc832db8bea3706a5"><a><Coderow rank="5" codeTitle={headline.charts[4].codeTitle} hoopcodes={headline.charts[4].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>

</div></div></div> */}
     

<div id="video">
<div className="pageGrid">
<div className="gridCenter">
<BlackSectiontitle title= {headline.headings[1].title} />
<Sectionsubtitle subtitle={headline.headings[1].subtitle} />
<Link href="/video?_id=5f284a2311bc31dbcb85d0bd"><a className="linkContainer">

<Blacklabel label={headline.videos[0].label}/>
 
<Title title={headline.videos[0].title}/>
<Dekk dekk={headline.videos[0].dekk}/>
<Authordate author={headline.videos[0].author} date={headline.videos[0].date} />
<MediaUrlFull mediaUrl="http://i.ytimg.com/vi/c_2y8SBAAHI/hqdefault.jpg"/>

</a></Link>
 
    <Link href="/video?_id=5f285b4311bc31dbcb85d0be"><a className="linkContainer">
    <Blacklabel label={headline.videos[1].label}/>
<MediaUrlFull mediaUrl="http://i.ytimg.com/vi/_EtXWZ6dn8I/hqdefault.jpg" />
<Title title={headline.videos[1].title}/>
<Authordate author={headline.videos[1].author} date={headline.videos[1].date} />
        </a></Link>

<Link href="/video?_id=5f285b5d11bc31dbcb85d0c0"><a>
<Blacklabel label={headline.videos[2].label}/>
<MediaUrlFull mediaUrl=" http://i.ytimg.com/vi/Ho9PaI6ApMQ/hqdefault.jpg" />
<Title title={headline.videos[2].title}/>
<Authordate author={headline.videos[2].author} date={headline.videos[2].date} />
    </a></Link>

<Link href="/video?_id=5f288d9211bc31dbcb85d0c1"><a>
<Blacklabel label={headline.videos[3].label}/>
<MediaUrlFull mediaUrl="http://i.ytimg.com/vi/2-f2XEAfmy8/hqdefault.jpg" />
<Title title={headline.videos[3].title}/>
<Authordate author={headline.videos[3].author} date={headline.videos[3].date} />
    </a></Link>

<Link href="/video?_id=5f288da611bc31dbcb85d0c2"><a>
<Blacklabel label={headline.videos[4].label}/>
<MediaUrlFull mediaUrl="http://i.ytimg.com/vi/9Inz8a7mp1w/hqdefault.jpg" />
<Title title={headline.videos[4].title}/>
<Authordate author={headline.videos[4].author} date={headline.videos[4].date} /></a>

</Link>

 
</div></div></div>

{/* <div id="topTen">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title={headline.headings[2].title} />
<Sectionsubtitle subtitle={headline.headings[2].subtitle} />

<Link href="/coin?_id=5f2899c611bc31dbcb85d0cb"><a><Coderow rank="1" codeTitle={headline.versus[0].codeTitle} hoopcodes={headline.versus[0].hoopcodes} image="http://i.ytimg.com/vi/c_2y8SBAAHI/hqdefault.jpg"/></a></Link>
<Link href="/coin?_id=5f2899d911bc31dbcb85d0cc"><a><Coderow rank="2" codeTitle={headline.versus[1].codeTitle} hoopcodes={headline.versus[1].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/coin?_id=5f289cc011bc31dbcb85d0cd"><a><Coderow rank="3" codeTitle={headline.versus[2].codeTitle} hoopcodes={headline.versus[2].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/coin?_id=5f289e7c11bc31dbcb85d0ce"><a><Coderow rank="4" codeTitle={headline.versus[3].codeTitle} hoopcodes={headline.versus[3].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>
<Link href="/coin?_id=5f289e9b11bc31dbcb85d0cf"><a><Coderow rank="5" codeTitle={headline.versus[4].codeTitle} hoopcodes={headline.versus[4].hoopcodes} image="http://i.ytimg.com/vi/UGnskAi6114/hqdefault.jpg"/></a></Link>

 
</div></div></div> */}


      </div>
 
     <style jsx>



       {`
#featured {
  background-color: rgb(255, 255, 255);
  padding: 2.25rem 0px 0px;

}
       #video {

        background-color: rgb(18, 18, 18);
    padding: 2.25rem 0px;
    color: #fff;
       }
       
       .pageGrid{
        display: grid;
        -webkit-box-pack: center;
        justify-content: center;
        grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
        grid-row-gap: 30px;
        
    
    }
       .gridCenter{
          grid-column: center-start / center-end;
       }
       
       .editorialPlacementContainer{
        color: rgb(0, 0, 0);
        font-weight: 100;
        line-height: 1.125;
        height: 100%;
        min-height: inherit;
       }
       #buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
    margin-right: 0.5rem;
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
       a {
           text-decoration: none;
           color: #000;
       } 
        
       .pageGridFull{
        grid-column: grid-start / grid-end;
       }
        
        .editorialPlacementLink{
            color: inherit;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: inherit; 
        }
    
        .editorialPlacementHeader{
            margin-bottom: 1rem; 
        }
        #video  a {
          color:#fff;
        }

        
       `}
     </style>
  </>
}

