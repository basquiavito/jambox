 
import Link from 'next/link'
import Label from '../../components/units/label'
 import Title from '../../components/units/maintitle'
import Dekk from '../../components/units/dekk'
import Authordate from '../../components/units/authordate'
import Imageholder from '../../components/units/imageHolder'
 import Content from '../../components/units/content'
import Video from '../../components/units/video'
import Youtubehooks from '../../components/units/youtubehooks'



function HoopcodeSummary({  videoId, label, name, dekk, author, date, mediaUrl, code }) {
return (
 <>
 
 
 
<div className="editorialContainer">
  <div className="pageGrid">
    <div className="gridCenter">
    <Label label={label} />
 
 <Title title={name} /> 
 
 <Dekk dekk={dekk}/>
 
 <Authordate author={author} date={date}/>
 <Youtubehooks videoIdA={videoId}/>
 
<b>{code}</b>
 



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

export default HoopcodeSummary;
