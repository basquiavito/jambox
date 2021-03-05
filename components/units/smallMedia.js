import styles from '../../styles/gazzetta.module.css'



const smallmedia = () => {
    return <>

<div className="media">
<figure className={styles.mediaLeft}>
<a className="image" href="">
<img className={styles.lazyImage}   src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756639/trae_dr7yhl.jpg"/>
 </a> </figure>

<div className={styles.mediaContent}>
    
<a href="" className={styles.hasTextBlack}>
<h4 className={styles.titleIsSMall}>
Sei positivi, allenamenti vietati e... Come Washington ha superato l'incubo Covid
</h4>

</a>
<span className={styles.authorHasTextCharcoal}>
    S. Sandri
    <time className="leadsDate" content="2021-01-24T21:06:58+00:00"
    dateTime="Jan 24, 2020">Ore Fa</time>
</span>
<p className={styles.textIsMedium}>
Il britannico e lo statunitense trascinano i Raptors alla quinta vittoria nelle ultime sei....
</p>



</div></div>
<style jsx>
    {`
    .media {
        align-items: flex-start;
         
        text-align: left;    
    }
    
    `}
</style>
    </>
}

export default smallmedia