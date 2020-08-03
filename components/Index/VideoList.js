import { Card } from 'semantic-ui-react'
 import Head from 'next/head'
 
 
function VideoList({ videos }) {
function mapVideoToItems(videos){
return videos.map(p => ({
 header: p.title ,
 meta:p.code,
childkey: p._id,
 href:`/video?_id=${p._id}`,
 
  
}));
 
 }
 
 return <>
 
 <Head>
 
 
 
   </Head><br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapVideoToItems(videos)} />

</div>


<style jsx>
 {`

 .back {
   position: absolute;
   top: 90px;
   margin-left: 15px;
 }
 .cardCollection {
   background-color:trasparent;
   display: flex;
   justify-content: center;
 }
 
 
 
 `} 
</style>

 
  </>
}
 
export default VideoList;
 
