import { Card } from 'semantic-ui-react'
 import Head from 'next/head'
 
 
function UpdateList({ updates }) {
function mapUpdateToItems(updates){
return updates.map(p => ({
 header: p.name ,
 meta: p.pts,

childkey: p._id,
 href:`/update?_id=${p._id}`,
 
  
}));
 
 }
 
 return <>
 
 <Head>
 
 
 
   </Head><br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapUpdateToItems(updates)} />

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
 
export default UpdateList;
 
