import React from 'react'
import { Embed } from 'semantic-ui-react'
 import Head from 'next/head'


const video = (props) => (
  <>
 <Head>
   <script src="lazysizes.min.js" async=""></script>
 </Head>
  <div className="videoComponent">

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

  
  <style jsx>
    {`
.videoComponent {
 
 
  background-color: radial-gradient(transparent 45%,rgba(0,0,0,.3));
  cursor: pointer;
}





    `}
  </style>
  
  
  
  </div>
  </>
)

export default video