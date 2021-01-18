import React, {useState} from 'react'
import Coderow from './coderow'
import Sectiontitle from './sectiontitle'

function coderowHub() {
    const [loadmore, setLoadMore ] = useState({
load: false
    })



   const loadMoreHandler = () => {
const doesShow = loadmore.load ;
setLoadMore({load : !doesShow})

   }
    return <>

<Sectiontitle title="Chart 22"></Sectiontitle>
<a href="https://hoopscript.com/article?_id=6005e8e9d10d9c718cd9f5f4"><Coderow rank ="1" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610999508/zion_kfgvea.jpg" hoopcodes="∞ Stride" details="  1/17/21     " codeTitle="Zion Williamson" /></a>
<a href="https://hoopscript.com/article?_id=6005ebe1d10d9c718cd9f5f5"><Coderow rank ="2" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611000702/Paul-George_wlqwaa.jpg" codeTitle="Paul George" hoopcodes="Slam Dunk" details=" 1/17/21   " /></a>
<a href="https://hoopscript.com/article?_id=6005f094d10d9c718cd9f5f6"><Coderow rank ="3" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="Jayson Tatum" hoopcodes="535" details="Tutuma " /></a>
<a href=""><Coderow rank ="4" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Lamelo Ball" hoopcodes="804 " details="Pop Reverse" /></a>
 
<a href=""><Coderow rank ="5" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg" codeTitle="Stephen Curry" hoopcodes="318" details="Lousiana " /></a>


{ loadmore.load  ? <div>
    <a href=""><Coderow rank ="6" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755951/harden_atkfyy.jpg" codeTitle="James Harden" hoopcodes="518" details="Albania " /></a>
 
    <a href=""><Coderow rank ="7" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755940/herro_bi4pxr.jpg" codeTitle="Tyler Herro" hoopcodes="PO6" details="Rep " /></a>
    <a href=""><Coderow rank ="8" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="jayson Tatum" hoopcodes="80P" details="TAFA " /></a>
 
  <a href=""><Coderow rank ="9" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755593/Kenny-Anderson_fci4zv.jpg" codeTitle="Kenny Anders" hoopcodes="232" details="Chibbs " /></a>
<a href=""><Coderow rank ="10" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610669340/AIcrossMJ_bmteuq.jpg" codeTitle="Allen Iverson" hoopcodes="013" details="Smoke " /></a>
<a href=""><Coderow rank ="11" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg" codeTitle="Kevin Durant" hoopcodes="802" details="Pop back " /></a>
<a href=""><Coderow rank ="12" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Lamelo Ball" hoopcodes="804 " details="Pop Reverse" /></a>
 
<a href=""><Coderow rank ="13" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg" codeTitle="Stephen Curry" hoopcodes="318" details="Lousiana " /></a>
<a href=""><Coderow rank ="14" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755951/harden_atkfyy.jpg" codeTitle="James Harden" hoopcodes="518" details="Albania " /></a>
 
<a href=""><Coderow rank ="15" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755940/herro_bi4pxr.jpg" codeTitle="Tyler Herro" hoopcodes="PO6" details="Rep " /></a>
<a href=""><Coderow rank ="16" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="jayson Tatum" hoopcodes="80P" details="TAFA " /></a>
<a href=""><Coderow rank ="17" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg" codeTitle="Kevin Durant" hoopcodes="802" details="Pop back " /></a>
<a href=""><Coderow rank ="18" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Lamelo Ball" hoopcodes="804 " details="Pop Reverse" /></a>
 
<a href=""><Coderow rank ="19" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg" codeTitle="Stephen Curry" hoopcodes="318" details="Lousiana " /></a>
<a href=""><Coderow rank ="20" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755951/harden_atkfyy.jpg" codeTitle="James Harden" hoopcodes="518" details="Albania " /></a>
 
<a href=""><Coderow rank ="21" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755940/herro_bi4pxr.jpg" codeTitle="Tyler Herro" hoopcodes="PO6" details="Rep " /></a>
<a href=""><Coderow rank ="22" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="jayson Tatum" hoopcodes="80P" details="TAFA " /></a>


 
</div> : null }

<div className="button">
<button onClick={loadMoreHandler}>Load More</button>

</div>
 <style jsx>
     {`
        a {
            text-decoration: none;
      
          }
.button {
    margin-top: 2rem;
    top: 4px;
  display: flex;
    justify-content: center;
    
}
          button {
            padding: 11px 12px 8px;
            border-radius: 3px;
            cursor: pointer;
            font-family: nyt-franklin, helvetica, arial, sans-serif;
            transition: all 0.6s ease 0s;
            white-space: nowrap;
            vertical-align: middle;
            background-color: rgb(86, 123, 149);
            border: 1px solid rgb(50, 104, 145);
            color: rgb(255, 255, 255);
            font-size: 11px;
            line-height: 11px;
            font-weight: 700;
            letter-spacing: 0.05em;
          
            text-transform: uppercase;
          }
     
     
     `}
 </style>

    </>
}


export default coderowHub