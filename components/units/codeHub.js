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

<Sectiontitle title="Top 15"></Sectiontitle>
<a href="https://hoopscript.com/article?_id=6005e8e9d10d9c718cd9f5f4"><Coderow rank ="1" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610999508/zion_kfgvea.jpg" hoopcodes="∞ Stride" details="  1/17/21     " codeTitle="Zion Will" /></a>
<a href="https://hoopscript.com/article?_id=6005ebe1d10d9c718cd9f5f5"><Coderow rank ="2" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611000702/Paul-George_wlqwaa.jpg" codeTitle="Paul George" hoopcodes="Slam Dunk" details=" 1/17/21   " /></a>
<a href="https://hoopscript.com/article?_id=6005f094d10d9c718cd9f5f6"><Coderow rank ="3" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755879/tatum_zof8gi.jpg" codeTitle="Jayson Tatum" hoopcodes="535" details="Tutuma " /></a>
<a href="https://hoopscript.com/article?_id=6005f441d10d9c718cd9f5f7"><Coderow rank ="4" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Ball/Bridges" hoopcodes="pass/dunk" details="Both" /></a>
 
<a href="https://hoopscript.com/article?_id=5ffa9e2bfeaebf363eaf659e"><Coderow rank ="5" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg" codeTitle="Stephen Curry" hoopcodes="+60 points" details="Outlier" /></a>


{ loadmore.load  ? <div>
    <a href="https://hoopscript.com/article?_id=6004d285930ead60f5db9ea0"><Coderow rank ="6" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610927063/harden_nets_mnur60.jpg" codeTitle="James Harden" hoopcodes="Debut" details="Triple Double " /></a>
 
    <a href="https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b"><Coderow rank ="7" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg" codeTitle="Kevin Durant" hoopcodes="802" details="Pop Back " /></a>
    <a href="https://hoopscript.com/article?_id=5ffdd22757b5d4568868a678"><Coderow rank ="8" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755779/coby_idsixe.jpg" codeTitle="Coby White" hoopcodes="806" details="Step Back " /></a>
 
  <a href="https://hoopscript.com/article?_id=5ffa9ec8feaebf363eaf659f"><Coderow rank ="9" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755593/Kenny-Anderson_fci4zv.jpg" codeTitle="Kenny Anders" hoopcodes="232" details="Chibbs " /></a>
<a href="https://hoopscript.com/article?_id=6000bd012a0623ace6a703dd"><Coderow rank ="10" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610669340/AIcrossMJ_bmteuq.jpg" codeTitle="Allen Iverson" hoopcodes="013" details="Smoke " /></a>
<a href="https://hoopscript.com/article?_id=5ffa9cccfeaebf363eaf659d"><Coderow rank ="11" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" codeTitle="Lamelo Ball"   hoopcodes="TD" details="Triple Double " /></a>
<a href="https://hoopscript.com/article?_id=5ffcbe4c481c848306249f11"><Coderow rank ="12" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755691/Bradley-Beal_riphkv.jpg" codeTitle="Bradley Beal" hoopcodes="+60 points" details="Outlier" /></a>
 
<a href="https://hoopscript.com/article?_id=5ffcc7d2481c848306249f15"><Coderow rank ="13" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611060734/rozier_bnif1o.jpg" codeTitle="Terry Rozier" hoopcodes="802" details="Sick Dunk " /></a>
<a href="https://hoopscript.com/article?_id=6006d6a62ba6762fdeae3b47"><Coderow rank ="14" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611061022/irving_uqzoxg.jpg" codeTitle="Kyrie Irving" hoopcodes="518 SB" details="Step Back " /></a>
 
<a href="https://hoopscript.com/article?_id=5fff9562707ad80ad30e42b0"><Coderow rank ="15" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757042/dono1_tcmowd.jpg" codeTitle="Donovan " hoopcodes="417" details="Missouri " /></a>
 

 
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