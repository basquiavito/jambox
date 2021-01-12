import Link from 'next/link'
import Video from '../units/video'
import LazyLoad from 'react-lazy-load';
import MediaUrlFull from './mediaUrlFull'

export default function mixtapeunit(props){
    return<>

<div className={`${'gridElement'} ${'elementThird'} `}>
 <div  className="mixtapeCard" >
     
<LazyLoad>
<MediaUrlFull mediaUrl={`http://i.ytimg.com/vi/${props.mediaUrl}/hqdefault.jpg`}/>
</LazyLoad></div>

<div className="mixtapeCardInfo">
 <h3>{props.title}</h3> </div> 

</div>


    <style jsx>


   {`
   
   .mixtapeCard  {
       width: 161px;
      
   }
 

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
        min-width: 161px;
      
    
    }
 
 .mixtapeCardInfo {
    font-family: Tiempos,Serif!important;
    font-weight: 400; 
    font-size: 16px;
    line-height: 20px;  
 }
 
 
 
   
   `}
       
    </style>
    </>
}


