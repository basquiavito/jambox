import Mixtapeunit from './mixtapeunit'

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
 
 <Mixtapeunit 
title={props.latest7Title}
mediaUrl={props.latest7}
 />


<Mixtapeunit 
title={props.latest8Title}
mediaUrl={props.latest8}
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