import Homevideo from '../../components/units/homevideo'
import Head from 'next/head'
import Link from 'next/link'
import Video from '../../components/units/video'
import VideoCategories from '../../components/units/videoCategory'
import VideoArticlePlusDekk from '../../components/units/videoArticlePlusDekk'
import VideoMetaTitlePlusRelease from '../../components/units/VideoMetaTitlePlusRelease'
import Trancript from '../../components/units/transcript'
import Youtubehooks from '../../components/units/youtubehooks'
import Blackabel from '../../components/units/blackLabel'

const style= {
    backgroundColor:'#000'
}

 
 
export default function MainVideo(){
    return<>
<Head>
<title>Codes</title>
</Head>
   
<div style={style}><br/>
    <Blackabel label="Videos"/>
<section className='videoInfoLandmark' role='region' arial-label='video info' tabIndex='-1'>
<div className="pageGrid">
<div className="gridCenter">
<Youtubehooks videoIdA="BdBEflR_9n0" />
<div className="videoInfoPanel">

<VideoCategories />
<VideoArticlePlusDekk/>
<VideoMetaTitlePlusRelease />
<Trancript />


</div></div></div>
</section></div>

<style jsx>
{`
 


 
.pageGrid{
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;
    font-family: 'Arial', sans-serif;


}
   .gridCenter{
      grid-column: center-start / center-end;
     
   }


.videoInfoPanel{
    color: #999;
    
  
 
}
 
 

 
`}    

</style>
    </>

}