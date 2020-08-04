import   {TwitterTweetEmbed }  from 'react-twitter-embed'
import Sectiontitle from './sectiontitle'
import LazyLoad from 'react-lazy-load';
 


const twitter = (props) => {
    return(
        <div className= "twitter">

          
            <Sectiontitle title={props.title} />

       <LazyLoad>
<TwitterTweetEmbed 
tweetId={props.token}
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
