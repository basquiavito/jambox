import Link from 'next/link'
import Video from '../units/video'
export default function mixtapeunit(props){
    return<>

<div className={`${'gridElement'} ${'elementThird'} `}>
 <div  className="mixtapeCard" >

<Video videoId={props.videoId}/>
<div className="mixtapeCardInfo">
<h3>{props.title}</h3>
 
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


