import { Card } from 'semantic-ui-react'
 import Link from 'next/link'
 import Head from 'next/head'
 
function ProfileList({ profiles }) {
function mapProfilesToItems(profiles){
return profiles.map(profile => ({
header: profile.lastname + " " + profile.name,
childkey: profile._id,
href:`/profile?_id=${profile._id}`,
meta: profile.team 
  
}));
 
 }
 
 return <>
 
 <Head>
 
 <link
rel="stylesheet" media="print" onload="this.media='all'" 
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
   </Head>
 
 
 <br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1"   items={ mapProfilesToItems(profiles)} />

</div>


<style jsx>
 {`
.card{
  margin: 1rem;
}

 .cardCollection {
   background-color:trasparent;
   display: flex;
   justify-content: center;
  
 }
 .card {
   border: 1px solid black;
 }
 
 
 `} 
</style>

 
  </>
}
 
export default ProfileList;
 

