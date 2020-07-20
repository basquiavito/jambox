
import Link from 'next/link';


function editorialMedia(props){
return(
        <>

 <div  className="pageGridFull">
         <picture></picture>
<div className="imageContainer" data-visible="true">
<noscript>{props.mediaUrl}</noscript>
</div>
 </div>

        <style jsx>
        {`
        
        .imageContainer{
                margin-bottom: 1rem;
                margin-top: 1rem;
                position: relative;
                padding-bottom: 56.25%;
                background: center center / auto calc(100% + 1px) repeat-x rgb(42, 42, 42);
                background-position: center center;
                background-repeat: repeat-x; 
        }
        .imageContainer[data-visible="true"] {
                background-image: url(${props.mediaUrl});
        }

        .overlayIcon{
                position: absolute;
                right: 1rem;
                bottom: 1rem;
                width: 3rem;
                height: 3rem;

        }
        
        `}


        </style>
      
</>
)
}

export default editorialMedia