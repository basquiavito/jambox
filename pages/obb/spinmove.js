import React, {Component} from 'react'
import Sectiontitle from '../../components/units/sectiontitle'
import Sectionsubtitle from '../../components/units/sectionsubtitle'
import Title from '../../components/units/title'
import Dekk from '../../components/units/dekk'
import Authordate from '../../components/units/authordate'
import Video from '../../components/units/video'
import Mixtape from '../../components/units/mixtape'
import Headlines from '../../components/units/headlines'
import Link from 'next/link'
import Obb from '../../components/units/obb'
 import Head from 'next/head'

export default function Spinmove() {
return<>
<Head>
 
<link
rel="stylesheet" media="print" onload="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>


<div id="homeContainer">
 <Sectiontitle title="Spin Move" />
 <Sectionsubtitle subtitle="Symbol 7 || 87" />

 <div className="pageGrid">
  <div className="gridCenter">

  < Obb f1='8' b1='0' s1='X' f2='7' b2='0' s2=''/><br/>
    <Title title="Best Articles"/><br/>

<div><a href="https://sports.yahoo.com/allen-iverson-spin-move-crossover-153837823.html/">This Allen Iverson spin-move-crossover commercial from 1998 was dope</a>
<p>	
Enrico Campitelli / Mar 16, 2020</p>
</div><br/>

<div><a href="http://www.espn.com/espn/feature/story/_/id/24504654/kyrie-irving-art-sick-handles-nba">Inside Kyrie's bag of tricks</a>
<p>By Chris Forsberg /  ∞ </p>
</div><br/>
   
<br/><br/>
      

      </div></div>


<div className="pageGrid">
  <div className="gridCenter">
<Title title="Popular Spin Moves Videos"/>
<Mixtape title="Lebron James"

      latest1="5GPtc0705GA"
      latest1Title="LeBron James - Best Spin Moves (Compilation)"
 author="Richard Clemons"

      latest2="bwKwiftfVmA"
      latest2Title="Lebron James Working on Spin Move Footwork with Hakeem Olajuwon"
  
      latest3="oNg8OLhvc1E"
      latest3Title='Lebron James Spin Cycle - Suns vs Cavs March 23 2018'
  
      latest4="zXb_PMVCz9M"
      latest4Title="Lebron James hidden weapon unstoppable Spin Move"
  
      latest5="lkAlAdnp_GY"
      latest5Title="LeBron James With the Spin and Acrobatic Finish!"
  
      latest6="4N8Pftp95M8"
      latest6Title="LeBron James teaches his signature spin move"
  
      /> 
</div></div>

<div className="pageGrid">
  <div className="gridCenter">
   <Mixtape title="Tony Parker"
      latest1="IghuKqDHSTY"
      latest1Title="Tony Parker - Tornado Spin Moves"
   
      latest2="NHyyPJHGCzk"
      latest2Title="Repertoire - Tony Parker Spin"
  
      latest3="61dgPp8RXTU"
      latest3Title="Tony Parker Spin Move"
  
      latest4="JmT5AgKKTwg"
      latest4Title="Tony Parker Spin Move Layup"
  
      latest5="4fASrfaFm_E"
      latest5Title="Tony Parker's Drive, Spin, and Dish"
  
      latest6="VsqgQhywGo0"
      latest6Title="Tony Parker spins and hangs for the fantastic flip shot!"
  
      /></div></div> 
  
<div className="pageGrid">
  <div className="gridCenter">

     <Mixtape title="Kyrie Irving"
      latest1="mWeF8H7tqHg"
      latest1Title="Kyrie Irving Spin Move Compilation"
   
      latest2="XXfGFkl0rZk"
      latest2Title="Kyrie Irving Nasty Spin Move Mix（2011-2015"
  
      latest3="1LtQtHhRRYs"
      latest3Title="Kyrie Irving 13 Different Spin moves"
  
      latest4="ABC0BukoeRQ"
      latest4Title="Kyrie Irving's Spin Move Shakes Lillard"
  
      latest5="knPbHvPJlsI"
      latest5Title="Kyrie Irving With the Nasty Spin Cycle Moves"
  
      latest6="TAsqZqtiwVM"
      latest6Title="Kyrie Irving Spin Move Mixtape 360"
  
      /></div></div> 



<div className="pageGrid">
  <div className="gridCenter">
<Mixtape title="Spin Move Mix --Legends"

      latest1="ND_DA61tbFM"
      latest1Title="Gary Payton Sick Spin Move.. February 20 1995 Sonics vs Lakers"
   author="Pay"
      latest2="uIsh7e9DAOM"
      latest2Title="Carmelo Anthony Sick Spin Move on LeBron"
  
      latest3="cLBVomNU__U"
      latest3Title="Stephenson's spin move twists up Parker!"
  
      latest4="t3cEZ74bWfE"
      latest4Title="Derrick Rose's crazy spin"
      
     

      latest5="9U7bQveo0nY"
      latest5Title="Paul Pierce stepback jumper over Artest solid defence"
  
    

    

      latest6="Yst0aad-Vh4"
      latest6Title="Bradley Beal - Sharpshooter (Superb Separation & Stepbacks) "
  
 
   

      /> </div></div>



</div>

  <style jsx>
      {
          `
          #homeContainer {
        
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
          
          
          `
      }
  </style>


        </>
    }
