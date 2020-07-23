import Head from 'next/head'
import Headlines from '../components/units/headlines'
import Charts from '../components/units/charts'
import Homevideo from '../components/units/homevideo'
import Videosub from '../components/units/videoSub'
import Sectiontitle from '../components/units/sectiontitle'
import Sectionsubtitle from '../components/units/sectionsubtitle'
import CodeCharts from '../components/units/codesChart'
import BlackSectiontitle from '../components/units/blackSectionTitle'
import React,{useState} from 'react'
import Label from '../components/units/label'
import Title from '../components/units/title'
import Authordate from '../components/units/authordate'
import ImageHolder from '../components/units/imageHolder'
import Link from 'next/link'
import Dekk from '../components/units/dekk'
import Maintitle from '../components/units/maintitle'
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
  }]})
    const switchSpanishHandler = () => {
      setHeadline({
headline:[
{label: 'Lo ultimo',maintitle:'Pelicans frente a los Nets | Highlight del Fogeo | Julio 22, 2020 ',dekk:'En el primer juego de fogeo en Orlando, los Pelican de Nueva Orleans derrotaron a los Nets de Brooklyn, 99-68. Brandon Ingram lidero a los Pelicans con 12 puntos en la victoria de anoche, mientras que Caris Levert y Jarreet Allen anotaron 10 puntos cada uno por los Nets',author:'Richard Clemon'},
{label: 'Bachillerato',maintitle:'Carmelo Anthony en el bachillerato era una bestia.”',author:'Richard Clemons'},
{label: 'TBT',maintitle:'Recordando aquellos dias de Steve Francis.”',author:'Richard Clemons',}],

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


<Link href="/posts/exodus"><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label={headline.headline[0].label}/>
<Maintitle title={headline.headline[0].maintitle}/>
<Dekk dekk={headline.headline[0].dekk}/>
<Authordate author={headline.headline[0].author} date="07/22/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/srimmage.png"/>
 


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
<Sectiontitle title="Hoopcodes" />
<Sectionsubtitle subtitle = "Codes of the week" />
<CodeCharts />
</div></div></div>
     

<div id="video">
<div className="pageGrid">
<div className="gridCenter">
<BlackSectiontitle title= "Versuz" />
<Sectionsubtitle subtitle= "Comparison" />
<Homevideo/>
<Videosub/>
</div></div></div>

<div id="Top Ten">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title="Now" />
  <Sectionsubtitle subtitle = "Latest Plays" />
<Charts />
 
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
        
       `}
     </style>
  </>
}
