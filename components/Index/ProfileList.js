import { Card } from 'semantic-ui-react'
 import Link from 'next/link'
 
 
function ProfileList({ profiles }) {
function mapProfilesToItems(profiles){
return profiles.map(profile => ({
header: profile.lastname,
description: profile.name,
extra:profile.team,
color: 'black',
fluid: true,
className:'card',
childkey: profile._id,
 href:`/profile?_id=${profile._id}`,
  
}));
 
 }
 
 return <><br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapProfilesToItems(profiles)} />

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
 

