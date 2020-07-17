import Link from 'next/link'
import Video from '../units/video'
export default function mixtapeunit(props){
    return<>

<div className={`${'gridElement'} ${'elementThird'} `}>
 <div  className="mixtapeCard" >

<Video videoId={props.videoId}/>
<div className="mixtapeCardInfo">
<h3>{props.title}</h3>
<div className="seasonYear">
  {props.year}
</div>
</div>
    
 
    
    </div> </div>


    <style jsx>


   {`
   
   
 

.mixtapeCard{
    padding: 0 1px;
   
    box-sizing: border-box;
    padding-left: 0;
   
    
}
    .mixtapeGrid{
       
        display: flex;
        flex-wrap: wrap;

    }

    .gridElement {
        margin-right: 4px;
        
  
}


    }
    .elementThird{
        min-width: 230px;
    }

    .coverArt{
        background-color: #000;
        width: 100%;
        padding-bottom: 100%;
        position: relative;
        overflow: hidden;
        display: block;

    }

    .coverArtImage{

        width: 100%; 
        object-fit: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;  
    }

    a img {
        border: none;
    }

    .mixtapeCardInfo{

        margin-top: .5rem; 
    }

    .seasonYear{
        color: #9a9a9a;
        font-weight: 600; 
    }
   
   
   `}
       
    </style>
    </>
}


