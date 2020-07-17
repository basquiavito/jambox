import Mixtapeunit from './mixtapeunit'
import Link from 'next/link'

export default function mixtape(props){
    return<>
<br/>
<h2>{props.title}</h2>
<div className={`${'mixtapeGrid'} ${'blackContainer'}`}>

  
<Mixtapeunit 
title={props.latest1Title} 
videoId={props.latest1}
author={props.author}
date={props.date}
 
/>
<Mixtapeunit 
title={props.latest2Title}
videoId={props.latest2}
author={props.author}
date={props.date}
 />
<Mixtapeunit
 title={props.latest3Title} 
 videoId={props.latest3}
 author={props.author}
date={props.date}
  />
<Mixtapeunit
 title={props.latest4Title} 
videoId={props.latest4} 
author={props.author}
date={props.date}/>
<Mixtapeunit
 title={props.latest5Title}
videoId={props.latest5} 
author={props.author}
date={props.date}/>

<Mixtapeunit 
title={props.latest6Title}
videoId={props.latest6}
author={props.author}
date={props.date} />
 






</div>

<style jsx>
    {`

.mixtapeGrid{
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s,-o-transform .54s cubic-bezier(.5,0,.1,1) 0s;

    display: flex;
  
    overflow-x: scroll;

}
.blackContainer{
    background-color: #fff;


}


    `}
</style>
    </>

}