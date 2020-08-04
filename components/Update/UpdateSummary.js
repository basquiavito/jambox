import Link from 'next/link'
import Label from '../../components/units/label'
 import Title from '../../components/units/maintitle'
import Dekk from '../../components/units/dekk'
import Authordate from '../../components/units/authordate'
import Youtubehooks from '../../components/units/youtubehooks'
 import Content from '../../components/units/content'

function VideoSummary({ name, pts, reb, ast, outcome , videoId}) {
return (
 <>
 
 
 
<div className="editorialContainer">
  <div className="pageGrid">
    <div className="gridCenter">
 
 
 <p><span>{name}</span> <span>{pts} pts</span> <span>{reb} reb</span> <span>{ast}   ast</span> | <span>{outcome}</span></p> 

<Youtubehooks videoIdA={videoId}/>
 
 
 
 
 
 



    </div>
  </div>


</div>   
<style jsx>


  {`
  
   
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}
  
  .gridCenter{
    grid-column: center-start / center-end;
 }
  
  
  `}
</style>
</>
 
  )
}

export default VideoSummary;
