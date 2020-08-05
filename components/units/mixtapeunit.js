import Link from 'next/link'
import Video from '../units/video'
import LazyLoad from 'react-lazy-load';


export default function mixtapeunit(props){
    return<>

<div className={`${'gridElement'} ${'elementThird'} `}>
 <div  className="mixtapeCard" >
<LazyLoad>
<Video videoId={props.videoId}/>
</LazyLoad>
<div className="mixtapeCardInfo">
<strong>{props.title}</strong>
 
</div>
    
 
    
    </div> </div>


    <style jsx>


   {`
   
   
 

.mixtapeCard{
    padding: 0 1px;
   
    box-sizing: border-box;
  
   
    
}
    .mixtapeGrid{
       
        display: flex;
  

    }

    .gridElement {
        margin-right: 4px;
        
  
}


    }
    .elementThird{
        min-width: 230px;
    }
 
 .mixtapeCardInfo h3 {
 
    font-size: 1.313rem;
    display: inline;
 }
 
 
 
   
   `}
       
    </style>
    </>
}


