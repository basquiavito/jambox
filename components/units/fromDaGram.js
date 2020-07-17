import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const FromDaGram = (props) => {
    return(
<div className="gramContainer">
<InstagramEmbed
url={props.gram}
maxWidth={320}
hideCaption={false}
containerTagName='div'
protocol=''
injectScript
onLoading={() => {}}
onSuccess={() => {}}
onAfterRender={() => {}}
onFailure={() => {}}

/>
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