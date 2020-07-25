import React from 'react'
 import Link  from 'next/link'
import Sectiontitle from '../../components/units/sectiontitle'
import Sectionsubtitle from '../../components/units/sectionsubtitle'
import Label from '../../components/units/label'
import Title from '../../components/units/title'
import Dekk from '../../components/units/dekk'
import Ptraits from '../../components/units/ptraits'
import Mixtape  from '../units/mixtape'
import Play from '../units/play'
import Bio from '../../components/units/bio'
import Authordate from '../units/authordate'
import Head from 'next/head'
import Video from '../../components/units/video'
import Blacklabel from '../../components/units/blackLabel'
import FromDaGram from '../../components/units/fromDaGram'
import Twitter from '../units/twitter'

export default function ProfileSummary({wikiLink, query,twitterToken, offHigh1Title, gram, careerHigh1, careerHigh1Title, college1Title, highSchool1, highSchool1Title, docTitle, defHighTitle, careerHighTitle, highSchool,highSchoolTitle, highSchoolAuthor, highSchoolDekk,highSchoolDate, doc1, defHigh1, assistOffTitle, signatureMove, signatureMove1, offHigh1,assistOff, name, lastname, accolades, accoladeAuthor, accoladeLink, accoladeSource, team, number, position, feet, inches, meters, kg, lbs, years, born, from, debut, latest1, latest1Title, latest2, latest2Title, latest3, latest3Title, latest4, latest4Title, latest5, latest5Title, latest6, latest6Title, statsId, highschool, college, college1,collegeTitle, rookie, offHigh, doc, defHigh, videoId, videoIdTitle, rookieOff, rookieOffTitle,careerHigh,offHighTitle}){
 return<>
<Head>
 

 <link
rel="stylesheet" media="print" onLoad="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
<script defer src="https://cdn.commento.io/js/commento.js"></script>
</Head>
<Sectiontitle title={`${name} ${lastname}`}/> 
<Sectionsubtitle subtitle={`Get to know ${lastname}`}/>
<div className="pageGrid">
<div className="gridCenter">
<figure className="quote">

<blockquote>
<p className="accoladeCaption"> { accolades}</p>
<figcaption>
<Authordate author={ accoladeAuthor}/> 
<a href={ accoladeLink}>
<cite>{ accoladeSource}</cite>
</a>
</figcaption>
</blockquote>
</figure></div></div>
 

<section className="ptraitsContainer">
<div className="pageGrid">
<div className="gridCenter">
<Ptraits feet={ feet} inches={ inches} meters={ meters} kg={ kg} lbs={ lbs} born={ born} from={ from} debut={ debut} years={ years}  />
 </div></div>
</section>


 <div id="">
 <div className="pageGrid">
<div className="gridCenter">
<Label label = "Latest News" />
<section>
  <Mixtape 
   latest1={latest1}
   latest1Title={latest1Title}

   latest2={latest2}
   latest2Title={latest2Title}

   latest3={latest3}
   latest3Title={latest3Title}

   latest4={latest4}
   latest4Title={latest4Title}

   latest5={latest5}
   latest5Title={latest5Title}

   latest6={latest6}
   latest6Title={latest6Title}

   /> </section><br/><br/>

<div>    <Link href={`${wikiLink}`}><a><Bio query={query}/></a></Link>


</div>






   <section>
   <Label label = "HighSchool + College + Rookie" />
   <Mixtape 
   latest1={highSchool} latest1Title={highSchoolTitle}
   latest2={highSchool1} latest2Title={highSchool1Title}
   latest3={college} latest3Title={collegeTitle}
   latest4={college1} latest4Title={college1Title}
    latest5={videoId} latest5Title={videoIdTitle}
    latest6={rookieOff} latest6Title={rookieOffTitle}
   
   />
   </section>
   <div className="statContainer">
     <div className="pageGrid">
<div className="gridCenter">
<a href={`https://stats.nba.com/player/${statsId}/`}>
 <Blacklabel  label="numbers" /> <br/>	 
<div className="statLabel"> 
<span className="statsPointer"> points | assists | reb | steals... </span></div>
 </a></div></div></div> 

   <section>
   <Label label = "Offense + Passing + Defense" />
   <Mixtape 
   latest1={offHigh} latest1Title={offHighTitle}
   latest2={offHigh1} latest2Title={offHigh1Title}
   latest3={careerHigh} latest3Title={careerHighTitle}
   latest4={careerHigh1} latest4Title={careerHigh1Title}
    latest5={assistOff} latest5Title={assistOffTitle}
    latest6={defHigh} latest6Title={defHighTitle}
   
   />

<div>
<div id="gram">
<div className="pageGrid">
<div className="gridCenter">
<Sectionsubtitle subtitle="Gram"/>
<FromDaGram gram={gram}/>
 </div></div></div>
</div>

   </section>
   <div id="commento"></div>
     </div></div></div>



 
   





 <style jsx>
{`

 
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}

  blockquote p{
    color: #333;
    line-height: 1.69em;
    letter-spacing: normal
    font-size: 2em;
    font-weight: 500;
    font-style: normal;
  
   }
.accoladeCaption{
font-size: 17px;
}

.quote{
width: 100%;
margin:0;
}


a:visited {
  color: black;
}
 .gridCenter{
    grid-column: center-start / center-end;
 }

 .statContainer{

  grid-column: center-start / center-end;
margin-top: 2.5rem;
margin-bottom: 2.5rem;
background-color:rgb(18 18 18); 
padding: 1em;
 
 



}




.statLabel {
color:#fff;
overflow-wrap: break-word;
word-break: break-word;
background-color: transparent;
cursor: pointer;
display: inline-block;
font-family: Programme, sans-serif;
font-size: 0.875rem;
line-height: 1;
text-align: center;
vertical-align: top;
user-select: none;
-webkit-appearance: none;
text-transform: uppercase;
letter-spacing: 1px;
border-color: #fff;
transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
border-width: 2px;
border-style: solid;
border-radius: 0px;
margin: 0px;
padding: 0.75rem 1.313rem;
background: transparent;
}

`}


 </style>
 </>


 
}




 
