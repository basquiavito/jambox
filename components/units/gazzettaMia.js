import styles from '../../styles/Home.module.css'
 import LatestMiniEditorial from './latestMiniEditorial'
import Image from 'next/image'
import Labelitaly from './labelItalty'
import StItaly from './stItaly'
import Title2 from './title2'
import DekkWhite from './dekkWhite'
import AuthordateWhite from './authordateWhite'
 

const gazzettamia = (props) => {
    return <>

<div id="app">
  <StItaly title="TBT"/> 
   <div className={styles.homeContentContainer}>
<div className={styles.centeredFlexColumn}>
<div id="featuredStories" className={styles.featuredStories}>
<div className={styles.pageGridDesktop}>
<div className={styles.topContentDesktop}>
<div className={styles.editorialPlacementContainer}>
<a className={styles.editorialLink} href={props.href}>

<div className={styles.editorialHeader}>
<Labelitaly label={props.label}/>
<Title2 title={props.title}/> <br/>
<DekkWhite dekk={props.dekk}/> 
<AuthordateWhite author={props.author} date={props.date}/>
</div>
</a>

</div></div>

<a href={props.href}className={styles.heroImageLink}>
 <Image
src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612304346/nowitski_butfyi.jpg"
alt={`A photo of `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>
  


 </a>

 
 <LatestMiniEditorial
 href="https://hooperos.com/article?_id=6006f3902ba6762fdeae3b49" 
 label="Superstar"
 extra="v1611064190/kobe_gck6ln.jpg"
 title="El dia que Kobe Bryant encesto 81 y se convirtio en Legenda January 22, 2006"
 
 />
 <LatestMiniEditorial
  href="https://hooperos.com/article?_id=6019d0f76a57486615252ec3" 

  label="Legenda" 
  extra="v1612304780/mannu_hvgec6.jpg"
  title="Recordando a Manu Ginobli: 48 Puntos contra @ Suns on 01/21/05"/>



 <LatestMiniEditorial
  href="https://hooperos.com/article?_id=6000bd012a0623ace6a703dd" 
  label="Ankle Breaker"
  extra="v1610669340/AIcrossMJ_bmteuq.jpg"
  title="Allen Iverson Crossover sobre Michael Jordan March 12, 1996" />

  
 <LatestMiniEditorial 
  href="https://hooperos.com/article?_id=6019d3b9bb4319ff662a12af" 
label="Legenda"
 extra="v1612305436/jeremy_lin_mzaskt.jpg"
 title="El juego que puso a Jeremy Lin en el mapa February 4, 2012"
  />
 
 
</div>


 
 

</div>

 
</div>
</div>
        </div>

   
   
  

     
    
    <style jsx>
      {`
 
 #featuredStories {
   background-color: #000;

 }

 
 h2 {
   font-size: 100%;
   font-weight: inherit;
 }
    #app {
      font-family: 'Poppins', sans-serif;
      background-color: #000;
      color: #fff;
    }
   a {
     text-decoration: none;
 }
      `}
    </style>
    </>
}

export default gazzettamia