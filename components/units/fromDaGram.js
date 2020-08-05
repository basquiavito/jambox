import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import LazyLoad from 'react-lazy-load';
const FromDaGram = (props) => {
    return(
<div className="gramContainer">
    <LazyLoad>
<InstagramEmbed
url={props.gram}
maxWidth={320}
hideCaption={true}
containerTagName='div'
protocol=''
injectScript
onLoading={() => {}}
onSuccess={() => {}}
onAfterRender={() => {}}
onFailure={() => {}}

/>
</LazyLoad>
<style jsx>{`
.gramContainer {
    display: flex;
    justify-content:
        center;
       
        padding: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
  
    
}


`}</style>
        </div>
    )
}
export default FromDaGram