import styles from '../../styles/Home.module.css'
import MiniEditorial from '../../components/units/miniEditorial'
import MiniEditorial2 from '../../components/units/miniEditorial2'
import MiniEditorial3 from '../../components/units/miniEditorial3'
import MiniEditorial4 from '../../components/units/miniEditorial4'


import Chart from './chart'
import Image from 'next/image'
const editorial = (props) => {
    return <>

<div id="app">
<div className={styles.homeContentContainer}>
<div className={styles.centeredFlexColumn}>
<div id="featuredStories" className={styles.featuredStories}>
<div className={styles.pageGridDesktop}>
<div className={styles.topContentDesktop}>
<div className={styles.editorialPlacementContainer}>
<a className={styles.editorialLink} href={props.href}>

<div className={styles.editorialHeader}>

<div className={styles.editorialLabel}>
<span  className={styles.TextLabel}>{props.label}</span> 
</div>
 
<div className={styles.editorialTitle}>
<h2>{props.title}</h2></div>

  <div className={styles.editorialDek}>
  {props.dekk}</div>

<br/>
  <div><div> 
<span className={styles.authorDate}>by {props.author} / </span> <span className={styles.publishedAt}>{props.date}</span>
</div></div>
  </div>
</a>






</div>



</div>

<a href={props.href} className={styles.heroImageLink}>
 <Image
src={props.image}
alt={`A photo of `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>
  


 </a>
 <MiniEditorial 
href="https://hooperos.com/article?_id=602301fa51fe2ff83aa7d6f0"
label="Mixtape"  
image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612308216/jamorant_po9na7.jpg"
title="Zion Williamson ha estado hirviendo en los ultimos 5 juegos"
author="Monk Torres"
date="Jan 9, 2021"
/>
 
<MiniEditorial 
 href="https://hooperos.com/article?_id=6023008f51fe2ff83aa7d6ef"
label="Picante" 
image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756849/currymss_f90cww.jpg"
title="Stephen Curry Le mete 57 a Dallas"
author="Basquiavito"
date="Feb 7, 2021"

/>

 <MiniEditorial  
href="https://hooperos.com/article?_id=6022fedd51fe2ff83aa7d6ee"
label="scoring"
image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612906437/jokic_qtf1ob.jpg"
title="Nikola Jokic marco un nuevo record para personal con 50 puntos"
author="Basquiavito"
date="Feb 6, 2021"
/>






<MiniEditorial 
href="https://hooperos.com/article?_id=6019df47d25ab2690094e65c"
label="Game Winner"
image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612308471/booker_hxfpam.jpg" 
 title="Devin Booker Para Ganar!!!!"
author="Basquiavito"
date="Feb 2, 2021"
 />
</div>





</div>

 
</div>
</div>
        </div>

   
   
  

     
    
    <style jsx>
      {`

 

.sizeImage {
  position: relative;
  padding-bottom: 56.25%;
  background: center center / auto calc(100% + 1px) repeat-x rgb(233, 233, 233);
}

 h2 {
  color: #121212;
  font-family: nyt-cheltenham,georgia,'times new roman',times,serif;
  font-weight: 700;
  font-style: italic;
  font-size: 1.9375rem;
  line-height: 2.25rem;
  text-align: left;
  width: calc(100% - 40px);
  max-width: 600px;
  margin-top: 0;
  vertical-align: baseline;
  margin-bottom: 1rem;
 
 }
    #app {
      font-family: 'Poppins', sans-serif;

    }
   a {
     text-decoration: none;
 }
      `}
    </style>
    </>
}

export default editorial