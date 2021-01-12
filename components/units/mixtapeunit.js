import Link from 'next/link'
import Video from '../units/video'
import LazyLoad from 'react-lazy-load';
import ImageHolder from './imageHolder'

export default function mixtapeunit(props){
    return<>

<div className={`${'gridElement'} ${'elementThird'} `}>
 <div  className="mixtapeCard" >
     
<LazyLoad>
<ImageHolder mediaUrl={`http://i.ytimg.com/vi/${props.mediaUrl}/hqdefault.jpg`}/>
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
    --type-token-name: discovery.hed-break-out;
    line-height: 1.29em;
    letter-spacing: -.013em;
    font-family: BatonTurbo,helvetica,sans-serif;
    text-decoration: none;
    color: #212121;
    font-weight: 700;
    font-style: normal;
    text-transform: none;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
    background-color: transparent;
    cursor: pointer;
    
    transition-property: color,background,text-shadow;
 }
 
 
 
   
   `}
       
    </style>
    </>
}


