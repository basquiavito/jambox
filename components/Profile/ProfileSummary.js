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

export default function ProfileSummary({docTitle, defHighTitle, careerHighTitle, highSchool,highSchoolTitle, doc1, defHigh1, assistOffTitle, signatureMove, signatureMove1, offHigh1,assistOff, name, lastname, accolades, accoladeAuthor, accoladeLink, accoladeSource, team, number, position, feet, inches, meters, kg, lbs, years, born, from, debut, latest1, latest1Title, latest2, latest2Title, latest3, latest3Title, latest4, latest4Title, latest5, latest5Title, latest6, latest6Title, statsId, highschool, college, college1,collegeTitle, rookie, offHigh, doc, defHigh, videoId, videoIdTitle, rookieOff, rookieOffTitle,careerHigh,offHighTitle}){
 return<>
<Head>
 
 <link
rel="stylesheet" media="print" onload="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>
<div id="profile">
<div className="pageGrid">
<div className="gridCenter">


<section>
<div className="pageGrid">
<div className="gridCenter">
 <div><h1><Sectiontitle title={`${name} ${lastname}`}/></h1></div>
 <div><h2><Sectionsubtitle subtitle={`Get to know ${lastname}`}/></h2></div><br/>

<div>
  
<figure className="quote">
<blockquote>
<p className="accoladeCaption"> {accolades}</p>
<figcaption>
<Authordate author={accoladeAuthor}/> 
<a href={accoladeLink}>
<cite>{accoladeSource}</cite>
</a>
</figcaption>
</blockquote>
</figure>
</div><br/>

<Label label = "Profile" />
<Dekk dekk={` ${team} | #${number}  | ${position}`}/>
</div></div>
</section><br/>

<section className="ptraitsContainer">
 
<Ptraits feet={feet} inches={inches} meters={meters} kg={kg} lbs={lbs} born={born} from={from} debut={debut} years={years}  />
 
</section>


<div>
  
 
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
  
  
  
 
  </div>




<div id="stats">
 
<a href={`https://stats.nba.com/player/${statsId}/`}>
<div className="statContainer">	 
<Label  label="numbers" />	 
<div className="statLabel"> 
<span className="statsPointer"> points | assists | reb | steals... </span></div>
</div></a></div> 




<div id=" ">
<div className="pageGrid">
<div className="gridCenter">


<h3>Popular {lastname} Plays</h3>



 






</div>

 

 





 </div> 


</div>

<style jsx>
    {`
    #profile{
       background-color: rgb(255, 255, 255);
       padding: 2.25rem 0px 0px;
    
     
    }


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
    .h2 {
     line-height: 1.36em;
     letter-spacing: -.017em;
     font-family: GTAmerica,helvetica,sans-serif;
     font-size: 22px;
     font-weight: 700;
     font-style: normal;
     text-transform: none;
 }
.ptraitsContainer{
  background-color: #fff;
}
    .squareButton { 
    width:100px; 
     color: rgb(0, 0, 0);
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
     border-color: rgb(0, 0, 0);
     transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
     border-width: 2px;
     border-style: solid;
     border-radius: 0px;
     margin: 0px;
     padding: 0.75rem 1.313rem;
 }
    }

    .theAthletic{
      background: #ccc;
      padding: 1rem;
      margin: 1rem;
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
    .editorialLink{
       color: inherit;
       display: flex;
       flex-direction: column;
       height: 100%;
       min-height: inherit;

    }

    .editorialContainer{
        margin-bottom: 1rem;
    }

    a {
      
       -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
       text-decoration: none;
   }

   .pageGridFull{
       grid-column: grid-start / grid-end;

   }

 
    
 #hoopcode {
   background-color: rgb(255, 255, 255);
   padding: 2.25rem 0px 0px;
 }


 .loadMore {
   background-color:#fff;
   font:inherit;
   border:1px solid blue;
   padding: 8px;
   cursor:pointer;
 }
 .statContainer{
   text-align: center;
   grid-column: center-start / center-end;
margin-top: 1rem;
background-color:#4183c4; 
padding: 1em;
margin-top: 3rem;
margin-bottom: 3rem;



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
 border-color: rgb(0, 0, 0);
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



 </div></div></div>
 </>


 
}




 
