import Link from 'next/link';
import LazyLoad from 'react-lazy-load';


function mediaUrlFull(props) {


 
    return(
    <div className="imagePlacement">
  <div className="playOverlayContainer">
      <LazyLoad>
    <div  className="imageContainer" data-visible="true">
        <noscript><img src={props.mediaUrl} alt="" /></noscript></div></LazyLoad>
        <div className="playOverlayIcon">
<svg viewBox="0 0 22 22"><path fill="#fff" d="M22 0H0v22h22V0z"></path><path className="st0" d="M15.6 11L7.9 6.5v9"></path></svg>

</div>
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
    position:relative;
        padding-Bottom: 56.25%;
        background:center center / auto calc(100% + 1px) repeat-x rgb(233, 233, 233);
        background-Position:center center;
        background-Repeat: repeat-x;
        background-Image:url(${props.mediaUrl});
        margin-Bottom:2rem;
        margin-Top: 1rem;
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

