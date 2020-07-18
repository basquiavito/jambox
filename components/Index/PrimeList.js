import { Card } from 'semantic-ui-react'
 import Head from 'next/Head'
 
 
function PrimeList({ primes }) {
function mapPrimesToItems(primes){
return primes.map(p => ({
 header: p.lastname,
 description: p.name,
extra:p.team,
color: 'black',
fluid: true,
className:'card',
childkey: p._id,
 href:`/prime?_id=${p._id}`,
  
}));
 
 }
 
 return <>
 
 <Head>
 
 <link
rel="stylesheet" media="print" onLoad="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
   </Head><br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapPrimesToItems(primes)} />

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
 
export default PrimeList;
 

