import { Card } from 'semantic-ui-react'
 
 
 
function StreetballList({ streetballs }) {
function mapStreetballsToItems(streetballs){
return streetballs.map(p => ({
    header: p.lastname,
    description: p.name,
   extra:p.team,
 color: 'teal',
 fluid: true,
 childkey: p._id,
 href:`/streetball?_id=${p._id}`
}));
 
 }
 
 return<>
  <br/><Card.Group stackable itemsPerRow="1" stackable centered items={ mapStreetballsToItems(streetballs)} /></>
}
 
export default StreetballList;
 