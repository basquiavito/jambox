 import Link from 'next/link';
import LazyLoad from 'react-lazy-load';


function mediaUrlFull(props) {


 
    return(
    <div className="imagePlacement">
  <div className="playOverlayContainer">
      <LazyLoad>
    <div  className="imageContainer" data-visible="true">
        <noscript><img src={props.mediaUrl} alt="" /></noscript></div></LazyLoad>
   
    </div>
 
 
 
 <style jsx>
     {`
     .imagePlacement{
        margin-top: 0.5rem;
     }
     .playOverlayContainer{
         position: relative;
     }
     .playOverlayIcon{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: 3rem;
        height: 3rem;

     }

     svg:not(:root) {
        overflow: hidden;
    }

    
.imageContainer {
   
        
        background:center center / auto calc(100% + 1px) repeat-x rgb(233, 233, 233);
         background-image:url(${props.mediaUrl});
        position:relative;
        padding-Bottom: 56.25%;
        background-Position:center center;

        margin-Top: 2rem;
}
:not(svg) {
    transform-origin: 0px 0px;
}
     
     `}
 </style>
 
   
            </div>
        )
    }
    
    export default mediaUrlFull

