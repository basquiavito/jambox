import   {TwitterTweetEmbed }  from 'react-twitter-embed'
import Sectiontitle from './sectiontitle'
 
 


const twitter = (props) => {
    return(
        <div className= "twitter">

          
            <Sectiontitle title={props.title} />

         
<TwitterTweetEmbed 
tweetId={props.token}
/>

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
