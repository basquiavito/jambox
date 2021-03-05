import Image from 'next/image'
import styles from '../../styles/gazzetta.module.css'
import Smallmedia from './smallMedia';

const gazzetta = () => {
    return <>
    <div className={styles.wrapper}>
 <div className={styles.container}>
<section className={styles.bodyHP}>
<div className={styles.columns}>
    <div className={styles.isEight}>
    <div className={styles.backMediaLeads}>
    <div className={`${styles.mediaLeadHeader} ${styles.fixerBetweenCenter}`}>
    <h3 className={styles.sectionTitle}>Vintage</h3>
    </div>

<div className={styles.mediaLeadContent}>

<div className={styles.mediaNews}>

<span className={styles.overTitle}>
Old School
</span>  

<div className={styles.media}>
<figure className={styles.mediaLeft}>
<a href="" className={styles.image} >
<img src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg" className={styles.lazyLaodingImage}></img>
</a>
</figure>

<div className={styles.mediaContent}>
<h4 className={styles.titleIsMedium}>
<a href="" className={styles.hasTextBlack}>
Toronto non si ferma più: Anunoby e VanVleet  mandano Indiana k.o.
</a>
</h4>


<span className={styles.authorHasTextCharcoal}>
    S. Sandri
    <time className="leadsDate" content="2021-01-24T21:06:58+00:00"
    dateTime="Jan 24, 2020">Ore Fa</time>
</span>
<p className={styles.textIsMedium}>
Il britannico e lo statunitense trascinano i Raptors alla quinta vittoria nelle ultime sei....
</p>

</div></div></div>

<div className={styles.carouselNews}>
<div className={styles.carouselContent}>
<ul className={styles.carouselSlider}>
<div className={styles.sepatator}>
<div className={styles.floatLeft}>
<div className={styles.backMediaNews}>
<span className={styles.overTitle}>NBA</span>
<div className={styles.media}>
     
<Smallmedia/>
<Smallmedia/> <Smallmedia/> <Smallmedia/>


</div>
</div>



</div>
</div>



    </ul> 
</div>

</div>





</div>



        </div>

    </div>

</div>
</section>
     
 </div>  
</div>   





 



<style jsx>
 {`
 
 
 blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
}
a {
    color: #f07821;
    cursor: pointer;
    text-decoration: none;
}
span {
    font-style: inherit;
    font-weight: inherit;
}
*, :after, :before {
    box-sizing: inherit;
}

article, aside, figure, footer, header, hgroup, section {
    display: block;
}
img {
    height: auto;
    max-width: 100%;
}

 figure {
     margin-right: 3rem;
 }
 
 
 `}   
</style>
    </>
}

export default gazzetta