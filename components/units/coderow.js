import Link from 'next/link'
import Image from 'next/image'
 import { useTracking } from 'react-tracking';
import Test from './test'
   
 function coderow (props){
return(
<div className="pageGridFull">
<div className="chartMobileRow">


 

<div className="rank">{props.rank}</div>

<div className="coverAndTitleAndRole">
<div className="cover">
<Image
src={props.image}
alt={`A photo of ${props.player}`}
width="100px"
height="100px"
 
className="sizeImageConainer"
/>
 </div>

<h3 className="titleAndPlayer">
<div className="title">{props.codeTitle}</div>
<div className="player">{props.hoopcodes}</div>
<div className="player">{props.details}</div>


</h3>
</div>

 


</div>







<style jsx>
{`
.metadatum{
   margin-bottom: 0.25rem;
   flex: 1 1 0%;
}
.iconWithLabelContainer{
   display: flex;
   -webkit-box-align: center;
   align-items: center; 
}
.metadata{
 
   grid-column: 9 / span 2;
 
 
}
.pageGridFull {
   grid-column: grid-start / grid-end;
}
.chartMobileRow
{
   display: grid;
   -webkit-box-pack: center;
   justify-content: center;
   grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
   color: inherit;
   width: 100%;
   -webkit-box-align: center;
   align-items: center;
   grid-auto-rows: minmax(75px, auto);
   font-size: 1rem;
   color: #344072;
   grid-row-gap: 30px;
   border-bottom: 0.15rem solid rgb(233, 233, 233); 
}
.rank{
   font-size: 1.313rem;
   font-weight: 100;
   text-align: center;
   align-self: flex-start;
   margin-top: 20px;
   grid-column: span 1 / auto;
}
.cover{
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   grid-column: 2 / span 5;
}
.coverAndTitleAndRole{
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   grid-column: 2 / span 5;
}
.cover{
   flex-shrink: 0; 
}
.sizeImageConainer{
   position: relative;
   width: 60px;
   height: 60px;
   background:  0% 0% / cover rgb(233, 233, 233);
}
.sizeImageConainer{
   background-image: url(${props.image})
}
.titleAndPlayer{
   margin-left: 1.5rem;
   min-width: 0px;
   line-height: 1.125;  
   align-items: baseline;
   webkit-box-align: baseline;
}

@media only screen and (max-width: 320px) {
   .title{
      overflow-wrap: break-word;
      word-break: break-word;
   
  
      white-space: nowrap;
      
  }

}
.title{
    overflow-wrap: break-word;
    word-break: break-word;
 
   
    white-space: nowrap;
    
}
.player{
   font-weight: 100;
   overflow-wrap: break-word;
   word-break: break-word;
 
   white-space: nowrap;
  
}
.textLabel{
   font-size: 0.75rem;
   font-weight: 400;
   line-height: 1;
   letter-spacing: 1px;
   text-transform: uppercase;
   color: rgb(154, 154, 154)
}
.iconWithLabelContainer{
   display: flex;
   -webkit-box-align: center;
   align-items: center;
}
.icon {
   width: 1rem;
   margin-right: 0.5rem;
   position: relative;
   top: -2px;
   flex-shrink: 0;}

   
   .icon svg{
       display: block;
       height: 100%;
       fill: rgb(0 0 0);
       overflow: visible;
   }
 
}
.textLabelIcon{
   font-size: 0.75rem;
   font-weight: 400;
   line-height: 1;
   letter-spacing: 1px;
   text-transform: uppercase;
 
}
.metadatumView{
   margin-bottom: 0.25rem;
   flex: 1 1 0%;
}
`
}

</style>
       </div>
   )
}

export default coderow