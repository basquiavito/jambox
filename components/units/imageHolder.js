
import Link from 'next/link';
import Image from 'next/image'

function editorialMedia(props){
return(
        <>
< a href="heroImage">
<div  className="pageGridFull">
         <picture className="photoContainer">
         <Image
         src={props.mediaUrl}
         alt=""
         width='320.px'
         height="180px"
         className="imageContainer"
         />
         </picture>
       
 
 
 </div>
</a>


        <style jsx>
        {`
.heroImage {
        grid-column: span 7 / auto;
}
        .pageGridFull {
                grid-column: grid-start / grid-end;
        }
        .figCaption {
                color: #999;
                font-family: nyt-cheltenham-small;
                font-style: normal;
                font-weight: normal;
                font-size: 0.6875rem;
                letter-spacing: 0.2px;
                margin-top: 4px;
                text-align: left;
                line-height: 0.875rem; 
                display: block; 
                text-size-adjust: 100%;
                font: inherit;
                letter-spacing: 0.2px;
                margin-top: 4px;
                text-align: left;
                vertical-align: baseline;
               
        }

        .photographer {
                color: #ccc;
                font-family: nyt-cheltenham-small;
                font-style: normal;
                font-weight: normal;
                font-size: 0.625rem;
                line-height: 0.75rem;
                margin: 0;
    padding: 0;
    border: 0;
    text-size-adjust: 100%;
    font: inherit;
    vertical-align: baseline;
                letter-spacing: 0.2px;

        }

        .photoContainer {
                position: relative;
                width: 100%;
                vertical-align: bottom;
                transition: color 0.6s ease;
        }
        
        .imageContainer{
                width: 100%;
                vertical-align: bottom;
                border: none;
        }
     

      
        
        `}


        </style>
      
</>
)
}

export default editorialMedia