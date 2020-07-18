import { Card } from 'semantic-ui-react'
 import Head from 'next/head'
 
 
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
 <Head>
 
 <link
rel="stylesheet"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
 </Head>
  <br/><Card.Group stackable itemsPerRow="1" stackable centered items={ mapStreetballsToItems(streetballs)} /></>
}
 
export default StreetballList;
 