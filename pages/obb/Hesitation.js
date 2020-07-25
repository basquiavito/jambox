import Head from 'next/head'
import HyvorTalk from 'hyvor-talk-react'
const hesi = () => {
 
    return <>

    
    hesitation

    <div>
        <h1>Article Title</h1>
 
        <div className="comment-count-view">
 
          { /* Comment Counts */ }
          <HyvorTalk.CommentCount 
           websiteId='1313'
           id='1313'
          />
 
        </div>
        
        <content>Your Article Here</content>
 
        { /* Load Comments now */ }
        <HyvorTalk.Embed 
          websiteId='1313'
          id='1313'
        />
      </div>

    </>

}
export default hesi