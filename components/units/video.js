import React from 'react'
import { Embed } from 'semantic-ui-react'
 import LazyLoad from 'react-lazy-load';

const video = (props) => (
  <>
 <LazyLoad>

     
 

 <Embed
 
 id={props.videoId}
 placeholder={`http://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
 source='youtube'
icon='disabled'
aspectRatio='4:3'
 

 autoplay={false}
 color="black"
 iframe={{
 allowFullScreen: true,
 style: {
   padding: 10,
   width: '300px',
   height: '200px'
 }
  

   }
 }
/>   


 </LazyLoad>
  
  </>
)

export default video