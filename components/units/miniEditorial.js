import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const miniEditorial = (props) => {
    return <>
 <div className={styles.editorialMini}>
<div className={styles.editorialContainer}>
<a href={props.href} className={styles.editorialLink}>
<div className={styles.editorialHeader}>
    
<div className={styles.editorialLabel}>
<span  className={styles.TextLabel}>{props.label}</span> 
</div>

<div className={styles.miniEditorialImage}>
<Image
src={props.image}
alt={`A photo of `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>
  
</div>

</div>

<div className={styles.miniEditorialTitle}>
<h2>{props.title}
  </h2></div><br/>


 


<div>
    <div> 
<span className={styles.authorDate}>by {props.author} / </span> <span className={styles.publishedAt}>{props.date}</span>
</div>






</div>


</a>

</div>
</div>
<style jsx>
    {`
     h2 {
        font-size: 100%;
        font-weight: inherit;
      }
    `}
</style>
    </>
}

export default miniEditorial