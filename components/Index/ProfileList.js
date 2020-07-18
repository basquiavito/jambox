import { Card } from 'semantic-ui-react'
 import Link from 'next/link'
 import Head from 'next/head'
 
function ProfileList({ profiles }) {
function mapProfilesToItems(profiles){
return profiles.map(profile => ({
header: profile.lastname,
description: profile.name,
extra:profile.team,
color: 'black',
fluid: true,
display:'inline-block',
className:'card',
childkey: profile._id,
 href:`/profile?_id=${profile._id}`,
  
}));
 
 }
 
 return <>
<Head>
 
 <link
rel="stylesheet" 
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>
 
 
 <br/><br/><br/>  
 <div className="cardCollection">

<Card.Group doubling textAlign="center" stackable  itemsPerRow="1" centered items={ mapProfilesToItems(profiles)} />

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
 
export default ProfileList;
 

