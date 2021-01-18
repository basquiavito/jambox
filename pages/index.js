import App from '../components/app'
import React from 'react';
import KickerHub from '../components/units/kickerHub'
import Billboard64 from '../components/units/billboard64'
import Sectiontitle from '../components/units/sectiontitle'
import Coderow from '../components/units/coderow'

function home(){
  return <>
 <main>

   <div id="kickerHub">
<KickerHub />
</div>

<Sectiontitle title="Chart"></Sectiontitle>

<Coderow rank ="1" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755593/Kenny-Anderson_fci4zv.jpg" codeTitle="Kenny Anderson" hoopcodes="232" details="Chibbs " />
<Coderow rank ="2" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610669340/AIcrossMJ_bmteuq.jpg" codeTitle="Allen Iverson" hoopcodes="013" details="Smoke " />
<Coderow rank ="3" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg" codeTitle="Kevin Durant" hoopcodes="802" details="Pop back " />
<Coderow rank ="4" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Lamelo Ball" hoopcodes="804 " details="Pop Reverse" />
 
<Coderow rank ="5" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg" codeTitle="Stephen Curry" hoopcodes="318" details="Lousiana " />
<Coderow rank ="6" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755951/harden_atkfyy.jpg" codeTitle="James Harden" hoopcodes="518" details="Albania " />
 
<Coderow rank ="7" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755940/herro_bi4pxr.jpg" codeTitle="Tyler Herro" hoopcodes="PO6" details="Rep " />
<Coderow rank ="8" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="jayson Tatum" hoopcodes="TAFA" details="TAFA " />
 


   <div id="app">
   <App />
   </div>


   </main>   

   <style jsx>
     {`
     main, .kickerHub {
      max-width: 38rem;
      padding: 1rem;
      margin: auto;
  
     }
    
     
     
     `}
   </style>
  </>
  
}

export default home