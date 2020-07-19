import Mixtapeunit from './mixtapeunit'
import Link from 'next/link'

export default function mixtape(props){
    return<>
 
 
<div className='mixtapeGrid'>

  
<Mixtapeunit 
title={props.latest1Title} 
videoId={props.latest1}
 
 
/>
<Mixtapeunit 
title={props.latest2Title}
videoId={props.latest2}
 
 />
<Mixtapeunit
 title={props.latest3Title} 
 videoId={props.latest3}
 
  />
<Mixtapeunit
 title={props.latest4Title} 
videoId={props.latest4} 
 />
<Mixtapeunit
 title={props.latest5Title}
videoId={props.latest5} 
 />
<Mixtapeunit 
title={props.latest6Title}
videoId={props.latest6}
 />
 






</div>

<style jsx>
    {`

.mixtapeGrid{


    display: flex;
  
    overflow-x: scroll;

}



    `}
</style>
    </>

}