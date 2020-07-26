import { Card } from 'semantic-ui-react'
 
 import Head from 'next/head'
 
function ProfileList({ profiles }) {
function mapProfilesToItems(profiles){
return profiles.map(profile => ({
header: profile.name + " " + profile.lastname,
childkey: profile._id,
href:`/profile?_id=${profile._id}`,
meta: profile.team,
color:'teal'
  
}));
 
 }
 
 return <>
 
 
 
 

 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1"   items={ mapProfilesToItems(profiles)} />

</div>


<style jsx>
 {`
 

 .cardCollection {
   background-color:trasparent;
   display: flex;
   justify-content: center;
   margin-top: 3rem;
  
 }
 
 
 
 `} 
</style>

 
  </>
}
 
export default ProfileList;
 

