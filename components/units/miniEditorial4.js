import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const miniEditorial4 = (props) => {
    return <>
 <div className={styles.editorialMini}>
<div className={styles.editorialContainer}>
<a href= "" className={styles.editorialLink}>
<div className={styles.editorialHeader}>
    
<div className={styles.editorialLabel}>
<span  className={styles.TextLabel}>news</span> 
</div>

<div className={styles.miniEditorialImage}>
<Image
src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg"
alt={`A photo of `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>
  
</div>

</div>

<div className={styles.miniEditorialTitle}>
<h2>Lady Gaga &amp; Jennifer Lopez Perform At Joe Biden’s 
  Presidential Inauguration
  </h2></div>


 


<div>
    <div> 
<span className={styles.authorDate}>by Chris Mench / </span>
 
<span className={styles.publishedAt}>Jan 20 2021</span>
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

export default miniEditorial4