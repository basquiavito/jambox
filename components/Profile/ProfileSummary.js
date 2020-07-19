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
import Youtubehooks from '../../components/units/youtubehooks'
import Authordate from '../units/authordate'
import Head from 'next/head'
import Video from '../../components/units/video'

export default function ProfileSummary({docTitle, defHighTitle, careerHighTitle, highSchool,highSchoolTitle, highSchoolAuthor, highSchoolDekk,highSchoolDate, doc1, defHigh1, assistOffTitle, signatureMove, signatureMove1, offHigh1,assistOff, name, lastname, accolades, accoladeAuthor, accoladeLink, accoladeSource, team, number, position, feet, inches, meters, kg, lbs, years, born, from, debut, latest1, latest1Title, latest2, latest2Title, latest3, latest3Title, latest4, latest4Title, latest5, latest5Title, latest6, latest6Title, statsId, highschool, college, college1,collegeTitle, rookie, offHigh, doc, defHigh, videoId, videoIdTitle, rookieOff, rookieOffTitle,careerHigh,offHighTitle}){
 return<>
<Head>
 
 <link
rel="stylesheet" media="print" onload="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>
<div id="profile">
 
<Sectiontitle title={`${name} ${lastname}`}/>  
 
 <div className="pageGrid">
<div className="gridCenter">
<Label label = "Latest News" />
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

   />
    </div></div>
   <section>
   <div className="pageGrid">
<div className="gridCenter">
<Label label="Draft Day"/> 
     <Video videoId={videoId}/>
     <Title title={videoIdTitle}/>
 
     </div></div>
   </section><br/><br/>

   <section>
   <div className="pageGrid">
<div className="gridCenter">
<Link href=""><a>HighSchool</a></Link><br/>
<Link href=""><a>College </a></Link><br/>
<Link href=""><a>Rookie Season </a></Link><br/>
<Link href=""><a>Offensive Highlights </a></Link><br/>
<Link href=""><a>Career High</a></Link><br/>
<Link href=""><a>Passing Highlights </a></Link><br/>
<Link href=""><a>Defensive Highlights </a></Link><br/>
<Link href=""><a>Documentary </a></Link><br/>
</div></div>
   </section>
 
   



 </div> 

 <style jsx>
{`
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}

.pageGrid a{
  display: block;
  text-align: center;
  border-bottom: 1px solid #eee;

}
 .gridCenter{
    grid-column: center-start / center-end;
 }
`}


 </style>
 </>


 
}




 
