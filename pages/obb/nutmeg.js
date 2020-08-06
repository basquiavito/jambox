import React, {Component} from 'react'
import Sectiontitle from '../../components/units/sectiontitle'
import Sectionsubtitle from '../../components/units/sectionsubtitle'
import Title from '../../components/units/title'
import Dekk from '../../components/units/dekk'
import Authordate from '../../components/units/authordate'
import Video from '../../components/units/video'
import Mixtape from '../../components/units/mixtape'
 
import Link from 'next/link'
import Obb from '../../components/units/obb'
import Head from 'next/head'

export default function Nutmeg() {
return<>
<Head>
<link
rel="stylesheet" media="print" onload="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
</Head>
 <Sectiontitle title="Nutmeg" />
 <Sectionsubtitle subtitle="Symbol N " />

 <div className="pageGrid">
  <div className="gridCenter">

  < Obb f1='8' b1='0' s1='X' f2='F' b2='9' s2=''/><br/>


</div></div>
  

      <div className="pageGrid">
  <div className="gridCenter">

   <Mixtape title="Popular Nutmeg"
      latest1="KpinoLYEUB0"
      latest1Title="6 People Chris Paul Has Nutmegged"
   
      latest2="gKLHcbAXjvg"
      latest2Title="The Greatest Nutmegs In NBA History"
  
      latest3="PqBZHY1y-z0"
      latest3Title="Trae Young's Best Nutmegs | NBA Career Compilation"
  
      latest4="NyX46vzysnE"
      latest4Title="Trevor Ariza Trucks Trae Young After Getting Nutmegged #WARNING"
  
      latest5="t5AvZQzj7CA"
      latest5Title="Manu Ginobili - Montage of Between the Legs Passes and Dribbling"
  
      latest6="r_gn8ilJznE"
      latest6Title="Lamar Odom Got 'Em || Shammgod ---> Nutmeg"
  
      /></div></div> 



  <style jsx>
      {
          `
          
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
          .mainArticle{
            background:#eee;
            padding: 0.5rem;
            font-size: 16px;
          }
     
          `
      }
  </style>


        </>
    }
