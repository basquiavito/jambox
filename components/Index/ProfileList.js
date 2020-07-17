import { Card } from 'semantic-ui-react'
 
 
 
function ProfileList({ profiles }) {
function mapProfilesToItems(profiles){
return profiles.map(profile => ({
 header: profile.lastname,
 description: profile.name,
extra:profile.team,
color: 'grey',
fluid: true,
childkey: profile._id,
 href:`/profile?_id=${profile._id}`,
  
}));
 
 }
 
 return <>
 <div className="cardCollection">
<Card.Group textAlign="center"   itemsPerRow="3" centered items={ mapProfilesToItems(profiles)} /></div>




 
  </>
}
 
export default ProfileList;
 

