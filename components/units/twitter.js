import LazyLoad from 'react-lazy-load';
import {  TwitterTweetEmbed  } from 'react-twitter-embed';



const twitter = (props) => {
    return(
        <div>

          
           

       <LazyLoad>
       <TwitterTweetEmbed
  tweetId={props.id}
/>
</LazyLoad>  
<style jsx>
    {`

    .twitter{
  
       
    
        margin-bottom: 3rem;
   
 
 
 
 

   
  
    
    }
   
    `}
</style>


        </div>
    )
}

export default twitter
