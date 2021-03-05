import styles from '../../styles/codes.module.css'
import Sectiontitle from './sectiontitle'
import Sectionsubtitle from './sectionsubtitle'

const style= {
    width: '278.672px',
    height: '44px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px'
}
const style2 = {
    transform : 'rotateX(0deg)'
}


const chart = () => {
    return <> 
<div id={styles.topHoopcodes}>
<div className={styles.pageGridDesktop}>
<Sectiontitle title="Charts"></Sectiontitle>
<Sectionsubtitle subtitle="Trending on Hooperos"></Sectionsubtitle>
<div className={styles.pageGridFull}>
<div className={styles.squareManySelectsWrapper}>
<div  style={style} className={styles.selectedContainer}>
 <div className={styles.selectedTitleContainer}>
 <span  className={styles.TextLabel}>Songs / All Genres / Today</span>
<div style={style2} className={styles.selectedArrow}>
<svg viewBox="0 0 21.32 10.91"><path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path></svg>

     </div>   </div>

     
<div className={styles.manySelected}>
<div className={styles.select}>
<div className={styles.selectTitle}>
<span  className={styles.TextLabel}>Type</span>
</div>
<div className={styles.selectedOptions}>
<div className={styles.selectOptionContainer}>Songs
<svg viewBox="0 0 22 16.2"><path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path></svg>
</div>
</div>

<div className={styles.selectedOptions}>
<div className={styles.selectOptionContainer}>Songs
</div></div>



<div className={styles.selectedOptions}>
<div className={styles.selectOptionContainer}>Albums
</div></div>



<div className={styles.selectedOptions}>
<div className={styles.selectOptionContainer}>Artist
</div></div>



<div className={styles.selectedOptions}>
<div className={styles.selectOptionContainer}>Lyrics
</div></div>



</div>

</div>








</div>




</div>
</div>

</div>
</div>

    </>
}

export default chart