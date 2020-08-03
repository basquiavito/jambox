import { Card } from 'semantic-ui-react'
 import Head from 'next/head'
 
 
function HoopcodeList({ hoopcodes }) {
function mapHoopcodeToItems(hoopcodes){
return hoopcodes.map(p => ({
 header: p.name ,
 meta:p.code,
childkey: p._id,
 href:`/hoopcode?_id=${p._id}`,
 
  
}));
 
 }
 
 return <>
 
 <Head>
 
 <link
rel="stylesheet" media="print" onLoad="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
   </Head> 
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapHoopcodeToItems(hoopcodes)} />

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
 
export default HoopcodeList;
 
