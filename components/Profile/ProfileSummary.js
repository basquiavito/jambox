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

export default function ProfileSummary({offHigh1Title, careerHigh1, careerHigh1Title, college1Title, highSchool1, highSchool1Title, docTitle, defHighTitle, careerHighTitle, highSchool,highSchoolTitle, highSchoolAuthor, highSchoolDekk,highSchoolDate, doc1, defHigh1, assistOffTitle, signatureMove, signatureMove1, offHigh1,assistOff, name, lastname, accolades, accoladeAuthor, accoladeLink, accoladeSource, team, number, position, feet, inches, meters, kg, lbs, years, born, from, debut, latest1, latest1Title, latest2, latest2Title, latest3, latest3Title, latest4, latest4Title, latest5, latest5Title, latest6, latest6Title, statsId, highschool, college, college1,collegeTitle, rookie, offHigh, doc, defHigh, videoId, videoIdTitle, rookieOff, rookieOffTitle,careerHigh,offHighTitle}){
 return<>
<Head>
 
 <link
rel="stylesheet" media="print" onload="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>

 
<Sectiontitle title={`${name} ${lastname}`}/>  
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

   /> </section>
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
   </section>
  
     </div></div></div>



 
   





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
`}


 </style>
 </>


 
}




 
