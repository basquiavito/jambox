import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Labelitaly from './labelItalty'
import Title2 from './title2'
import DekkWhite from './dekkWhite'
import AuthordateWhite from './authordateWhite'
import Title4miniEditorial from './title4miniEditorial'


const latestMiniEditorial = (props) => {
    return <>
 <div className={styles.editorialMini2}>
<div className={styles.editorialContainer}>
<a href={props.href} className={styles.editorialLink}>
<div className={styles.editorialHeader}>
   <Labelitaly label={props.label} /> 
{/* <div >
<span  className={styles.TextLabel}>news</span> 
</div> */}

<div className={styles.miniEditorialImage}>
<Image
src={`https://res.cloudinary.com/www-hoopscript-com/image/upload/${props.extra}`}
alt={`A photo of `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>
  
</div>
<Title4miniEditorial title={props.title}/><br/> 
 <AuthordateWhite author="Richard Clemons" date="Jan 23, 2021"></AuthordateWhite>
{/* 
 <div className={styles.miniEditorialTitle}>
<h2> Jay Ortega
  </h2></div>   */}
 
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

export default latestMiniEditorial