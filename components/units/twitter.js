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
  
       
        padding-bottom: 1rem;
        margin-bottom: 3rem;
   
    visibility: visible;
    display: block;
    transform: rotate(0deg);
    max-width: 100%;

   
  
    margin-bottom: 10px;
    }
   
    `}
</style>


        </div>
    )
}

export default twitter
