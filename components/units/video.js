import React from 'react'
import { Embed } from 'semantic-ui-react'
 import Head from 'next/head'
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
 className='lazyload'
 iframe={{
 allowFullScreen: true,
 style: {
   padding: 10,
 }
  

   }
 }
/>   


 </LazyLoad>
  
  </>
)

export default video