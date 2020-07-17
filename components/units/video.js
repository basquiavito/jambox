import React from 'react'
import { Embed } from 'semantic-ui-react'
 
 



const video = (props) => (
  <div className="videoComponent">

  <Embed
 
    id={props.videoId}
    placeholder={`http://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
    source='youtube'
 icon='disabled'
   
 
    autoplay={false}
    color="black"
    iframe={{
    allowFullScreen: true,
     

      }
    }
  />   

  
  <style jsx>
    {`
.videoComponent {
 
 
  background-color: radial-gradient(transparent 45%,rgba(0,0,0,.3));
  cursor: pointer;
}





    `}
  </style>
  
  
  
  </div>
)

export default video