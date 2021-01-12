import Mixtapeunit from './mixtapeunit'
import Link from 'next/link'
import Title from './title'
export default function mixtape(props){
    return<>
 

<div className='mixtapeGrid'>

  
<Mixtapeunit 
title={props.latest1Title} 
mediaUrl={props.latest1}
 
 
/>
<Mixtapeunit 
title={props.latest2Title}
mediaUrl={props.latest2}
 
 />
<Mixtapeunit
 title={props.latest3Title} 
 mediaUrl={props.latest3}
 
  />
<Mixtapeunit
 title={props.latest4Title} 
 mediaUrl={props.latest4} 
 />
<Mixtapeunit
 title={props.latest5Title}
 mediaUrl={props.latest5} 
 />
<Mixtapeunit 
title={props.latest6Title}
mediaUrl={props.latest6}
 />
 






</div>

<style jsx>
    {`

.mixtapeGrid{


    display: flex;
  
    overflow-x:auto;

}



    `}
</style>
    </>

}