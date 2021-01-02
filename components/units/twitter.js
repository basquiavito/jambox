import { Tweet } from 'react-twitter-widgets'
import LazyLoad from 'react-lazy-load';



const twitter = (props) => {
    return(
        <div>

          
           

       <LazyLoad>
       <Tweet tweetId={props.tweet} />
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
