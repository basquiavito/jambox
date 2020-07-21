import React from 'react'
import { Embed } from 'semantic-ui-react'
 import LazyLoad from 'react-lazy-load';

const video = (props) => (
  <>
 <LazyLoad>

     <iframe width="560" height="315" src="https://www.youtube.com/embed/lOgxQ8xK-QU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 


  

 
 
 


 </LazyLoad>
  
  </>
)

export default video