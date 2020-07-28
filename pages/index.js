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
    label: 'Latest',
    maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
    dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
    author:'Richard Clemons'
  },
  {
    label: 'HighSchool',
    maintitle:'Carmelo Anthony in Highschool was a Beast”',
    dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
    author:'Richard Clemons'
  },

  {
    label: '#TBT',
    maintitle:'Remembering the days of Steve Francis.”',
    dekk:'Francis put the streetball in the NBA.',
    author:'Richard Clemons'
  }],
    charts: [
  {codeTitle:'Iverson Crossed Jordan', hoopcodes:'013 013 180 FG$ | DOUBLE PiCASSO + base   '},
  {codeTitle:'Trae Young Nutmeg', hoopcodes:'809 N FG$'},
  {codeTitle:'Luka Doncic Steb Back', hoopcodes:'806 FG$'},
  {codeTitle:'Damian Lillard explosive Spin Move', hoopcodes:'870 180 FG$'},
  {codeTitle:'Lonzo Ball Crossover', hoopcodes:'018 FG$'}
],
videos:[
  {label:'On Fire',title:'Bol Bol shine in the Victory of Denver Nugetts vs menphis.', dekk:'Bol Bol went Opal mode.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Scoring',title:'Lamelo Ball is the future of League', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Passing',title:'Inside the NBA Bubble: The day the NBA returned', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Defense',title:'Kevin Garnett wants to own the Wolves, but it won’t be that simple', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Business',title:'NBA bubble gambling: A new frontier featuring low scores and long shots', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'}
],
versus:[
  {codeTitle:' Kobe vs Jordan', hoopcodes:'Fadeaway'},
  {codeTitle:'Luka vs Harden', hoopcodes:'Step Back'},
  {codeTitle:'Duncan vs Olajuwon', hoopcodes:'Post up'},
  {codeTitle:'Kidd vs Stockton', hoopcodes:'Passing'},
  {codeTitle:'Mutombo vs Mourning', hoopcodes:'Defense'}
],
headings:[
  {title:'Hoopcodes', subtitle:'Code of the Week'},
  {title:'Videos', subtitle:'Latest Videos'},
  {title:'Versuz', subtitle:'Who you Got?'}
]

})
    const switchSpanishHandler = () => {
      setHeadline({
headline:[
{label: 'Lo ultimo',maintitle:'Pelicans frente a los Nets | Highlight del Fogeo | Julio 22, 2020 ',dekk:'En el primer juego de fogeo en Orlando, los Pelican de Nueva Orleans derrotaron a los Nets de Brooklyn, 99-68. Brandon Ingram lidero a los Pelicans con 12 puntos en la victoria de anoche, mientras que Caris Levert y Jarreet Allen anotaron 10 puntos cada uno por los Nets',author:'Richard Clemon'},
{label: 'Bachillerato',maintitle:'Carmelo Anthony en el bachillerato era una bestia.”',author:'Richard Clemons'},
{label: 'TBT',maintitle:'Recordando aquellos dias de Steve Francis.”',author:'Richard Clemons',}
],
charts: [
  {codeTitle:'Iverson cruzo a Jordan', hoopcodes:'180 108 103 FG$'},
  {codeTitle:'Trae Young y su nuez moscada', hoopcodes:'809 N FG$'},
  {codeTitle:'Luka Doncic y su psicopata Paso Atras', hoopcodes:'806 FG$'},
  {codeTitle:'Damian Lillard giro explosivo', hoopcodes:'870 180 FG$'},
  {codeTitle:'Lonzo Ball y su cruze', hoopcodes:'018 FG$'}
],
videos:[
  {label:'Caliente',title:'Bol Bol brillo en la victoria de Denver vs Menphis', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Puntos',title:'Lamelo Ball es el futuro de la liga', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Pase',title:'Dentro de la Burbuja: El dia en que volvio la NBA', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Defensa',title:'Kevin Garnett quiere ser propietario de los Wolves, pero no sera tan facil', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Fuego',title:'Apuestas en la burbuja: una nuevo frente, con menos anotaciones y mas tiros de larga distancia.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'}
],
versus:[
  {codeTitle:' Kobe vs Jordan', hoopcodes:'Fadeaway'},
  {codeTitle:'Luka vs Harden', hoopcodes:'Paso Atras'},
  {codeTitle:'Duncan vs Olajuwon', hoopcodes:'Posteo'},
  {codeTitle:'Kidd vs Stockton', hoopcodes:'Pase'},
  {codeTitle:'Mutombo vs Mourning', hoopcodes:'Defensa'}],

headings:[
  {title:'Hoopcodes', subtitle:'Codigos de la semana'},
  {title:'Videos', subtitle:'Videos Recientes'},
  {title:'Versus', subtitle:'A Quien apuestas?'}
]
      })
    }
    const switchEnglishHandler = () => {
      setHeadline({
headline:[
  {
    label: 'Latest',
    maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
    dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
    author:'Richard Clemons'
  },
  {
    label: 'HighSchool',
    maintitle:'Carmelo Anthony in Highschool was a Beast”',
    dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
    author:'Richard Clemons'
  },

  {
    label: '#TBT',
    maintitle:'Remembering the days of Steve Francis.”',
    dekk:'Francis put the streetball in the NBA.',
    author:'Richard Clemons'
  }



],
charts: [
  {codeTitle:'Iverson Crossed Jordan', hoopcodes:'180 108 103 FG$'},
  {codeTitle:'Trae Young Nutmeg', hoopcodes:'809 N FG$'},
  {codeTitle:'Luka Doncic Steb Back', hoopcodes:'806 FG$'},
  {codeTitle:'Damian Lillard explosive Spin Move', hoopcodes:'870 180 FG$'},
  {codeTitle:'Lonzo Ball Crossover', hoopcodes:'018 FG$'}
],
videos:[
  {label:'On Fire',title:'Bol Bol shine in the Victory of Denver Nugetts vs menphis.', dekk:'Bol Bol went Opal mode.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Scoring',title:'Lamelo Ball is the future of League', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Passing',title:'Inside the NBA Bubble: The day the NBA returned', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Defense',title:'Kevin Garnett wants to own the Wolves, but it won’t be that simple', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'},
  {label:'Business',title:'NBA bubble gambling: A new frontier featuring low scores and long shots', dekk:'Bol Bol jugo modo Opal.', mediaUrl:'https://s3.amazonaws.com/pedales.net/srimmage.png', author:'Jay Ortiz', date:'Jul 23, 2020'}
],
versus:[
  {codeTitle:' Kobe vs Jordan', hoopcodes:'Fadeaway'},
  {codeTitle:'Luka vs Harden', hoopcodes:'Step Back'},
  {codeTitle:'Duncan vs Olajuwon', hoopcodes:'Post up'},
  {codeTitle:'Kidd vs Stockton', hoopcodes:'Passing'},
  {codeTitle:'Mutombo vs Mourning', hoopcodes:'Defense'}
],

headings:[
  {title:'Hoopcodes', subtitle:'Code of the Week'},
  {title:'Videos', subtitle:'Latest Videos'},
  {title:'Versuz', subtitle:'Who you Got?'}
]


      })
    } 
    
  return <>
<Head>
<title>Basketball Notation, news, profiles and more | Hoopscript</title>
     
</Head>
<div id="container">


<div id="featured">
<div className="pageGrid">
<div className="gridCenter">
  <div className="editorialPlacementContainer">
  <div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>ESPAÑOL </button>
    <button  className="buttonStyle" onClick={switchEnglishHandler}>ENGLISH </button>
    </div><br/><br/>


<Link href="/headline"><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label={headline.headline[0].label}/>
<Maintitle title={headline.headline[0].maintitle}/>
<Dekk dekk={headline.headline[0].dekk}/>
<Authordate author={headline.headline[0].author} date="07/22/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/>
 


</div></a></Link>

    

<Link href="/posts/genesis"><a>
<Label label={headline.headline[1].label}/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobewallace.jpg"/>
<Title title={headline.headline[1].maintitle}/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>

    <Link href="/posts/matrix"><a>
<Label label={headline.headline[2].label}/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/>
<Title title={headline.headline[2].maintitle}/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>

  </div>

</div>  </div></div><br/>




<div id="charts">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title={headline.headings[0].title} />
<Sectionsubtitle subtitle = {headline.headings[0].subtitle} />
<Link href="/codes/codes"><a><Coderow rank="1" codeTitle={headline.charts[0].codeTitle} hoopcodes={headline.charts[0].hoopcodes} image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>
<Link href="/codes/codes1"><a><Coderow rank="2" codeTitle={headline.charts[1].codeTitle} hoopcodes={headline.charts[1].hoopcodes} image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>
<Link href="/codes/codes2"><a><Coderow rank="3" codeTitle={headline.charts[2].codeTitle} hoopcodes={headline.charts[2].hoopcodes}image="https://s3.amazonaws.com/pedales.net/kobeShaq.jpg"/></a></Link>
<Link href="/codes/codes3"><a><Coderow rank="4" codeTitle={headline.charts[3].codeTitle} hoopcodes={headline.charts[3].hoopcodes} image="https://s3.amazonaws.com/pedales.net/luka.jpeg"/></a></Link>
<Link href="/codes/codes4"><a><Coderow rank="5" codeTitle={headline.charts[4].codeTitle} hoopcodes={headline.charts[4].hoopcodes} image="https://s3.amazonaws.com/pedales.net/aimovemj.jpg"/></a></Link>
</div></div></div>
     

<div id="video">
<div className="pageGrid">
<div className="gridCenter">
<BlackSectiontitle title= {headline.headings[1].title} />
<Sectionsubtitle subtitle={headline.headings[1].subtitle} />
<Link href="/videos/video"><a className="linkContainer">

<Blacklabel label={headline.videos[0].label}/>
 
<Title title={headline.videos[0].title}/>
<Dekk dekk={headline.videos[0].dekk}/>
<Authordate author={headline.videos[0].author} date={headline.videos[0].date} />
<MediaUrlFull mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/>

</a></Link>
 
    <Link href="/videos/video1"><a className="linkContainer">
    <Blacklabel label={headline.videos[1].label}/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title={headline.videos[1].title}/>
<Authordate author={headline.videos[1].author} date={headline.videos[1].date} />
        </a></Link>

<Link href="/videos/video2"><a>
<Blacklabel label={headline.videos[2].label}/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/jordanShaq.jpg" />
<Title title={headline.videos[2].title}/>
<Authordate author={headline.videos[2].author} date={headline.videos[2].date} />
    </a></Link>

<Link href="/videos/video3"><a>
<Blacklabel label={headline.videos[3].label}/>
<MediaUrlFull mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg" />
<Title title={headline.videos[3].title}/>
<Authordate author={headline.videos[3].author} date={headline.videos[3].date} />
    </a></Link>

<Link href="/videos/video4"><a>
<Blacklabel label={headline.videos[4].label}/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title={headline.videos[4].title}/>
<Authordate author={headline.videos[4].author} date={headline.videos[4].date} /></a>

</Link>

 
</div></div></div>

<div id="topTen">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title={headline.headings[2].title} />
<Sectionsubtitle subtitle={headline.headings[2].subtitle} />
  <Link href="/charts/top"><a><Coderow rank="1" codeTitle={headline.versus[0].codeTitle} hoopcodes={headline.versus[0].hoopcodes} image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>
<Link href="/charts/top1"><a><Coderow rank="2" codeTitle={headline.versus[1].codeTitle} hoopcodes={headline.versus[1].hoopcodes} image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>
<Link href="/charts/top2"><a><Coderow rank="3" codeTitle={headline.versus[2].codeTitle} hoopcodes={headline.versus[2].hoopcodes} image="https://s3.amazonaws.com/pedales.net/kobeShaq.jpg"/></a></Link>
<Link href="/charts/top3"><a><Coderow rank="4" codeTitle={headline.versus[3].codeTitle} hoopcodes={headline.versus[3].hoopcodes} image="https://s3.amazonaws.com/pedales.net/luka.jpeg"/></a></Link>
<Link href="/charts/top4"><a><Coderow rank="5" codeTitle={headline.versus[4].codeTitle} hoopcodes={headline.versus[4].hoopcodes} image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>

 
</div></div></div>


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
