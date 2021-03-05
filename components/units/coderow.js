import Link from 'next/link'
import Image from 'next/image'
 
   
 function coderow (props){
return(
 <a href={props.href}>
<div className="chartMobileRow">


 

<div className="rank">{props.rank}</div>

<div className="coverAndTitleAndRole">
<div className="cover">
<Image
src={props.image}
alt={`A photo of ${props.player}`}
width="60px"
height="60px"
className="sizeImageConainer"
/>
 </div>

<h3 className="titleAndPlayer">
<div className="title">{props.codeTitle}</div>
<div className="player"><span className="textLabelContent">{props.hoopcodes}</span>
</div></h3>
</div>
<div className="detalles">{props.details}</div>


<div className="playMetadata">
<div className="metadatum">
<div className="iconWithLabelContainer">
<div className="icon">
<svg viewBox="0 0 17 26"><path fill="#000" d="M4 3c2.95 1 6.84 8.93 6.84 8.93a8.361 8.361 0 0 0 1-5.43A15.928 15.928 0 0 1 17 18c-.12 7-8.85 8.05-8.85 8.05a4.63 4.63 0 0 0 1.76-2.87c.29-1.8-2.58-3.8-2.58-3.8-2.48 4.15-1.07 6.67-1.07 6.67S0 23.1 0 19.24c0-3.86 4.22-7.75 4.62-10.79A12.25 12.25 0 0 0 4 3zm2.58 5.51h-.02v.17A13.89 13.89 0 0 1 4.23 14C3.13 15.77 2 17.65 2 19.25c0 1 .88 2.07 2 3a12.38 12.38 0 0 1 1.62-3.9l1.1-1.84 1.84 1.2c.59.45 3.29 2.48 3.44 5a5.47 5.47 0 0 0 3-4.78 12.81 12.81 0 0 0-1.73-6.37c-.19.5-.426.98-.7 1.44l-1.89 3.1-1.62-3.29a39.714 39.714 0 0 0-2.48-4.3z"></path></svg>

</div>
<span className="textCount">
{props.fire}
</span></div></div>

<div className="metadatumMore">
<div className="iconWithLabelContainer">
<div className="icon2">
<svg viewBox="0 0 22 15.45"><path d="M11 2c4 0 7.26 3.85 8.6 5.72-1.34 1.87-4.6 5.73-8.6 5.73S3.74 9.61 2.4 7.73C3.74 5.86 7 2 11 2m0-2C4.45 0 0 7.73 0 7.73s4.45 7.73 11 7.73 11-7.73 11-7.73S17.55 0 11 0z"></path><path d="M11 5a2.73 2.73 0 1 1-2.73 2.73A2.73 2.73 0 0 1 11 5m0-2a4.73 4.73 0 1 0 4.73 4.73A4.73 4.73 0 0 0 11 3z"></path></svg>
</div>

<span className="textCount2">
{props.views}
</span>


</div>
</div>



</div>

 
<style jsx>
{`

 .detalles {
   grid-column: span 3 / auto;
   font-weight: 100;
   overflow-wrap: break-word;
   word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   
 }
 @media only screen and (min-width: 1201px){
.chartMobileRow
{
   display: grid;
   -webkit-box-pack: center;
   justify-content: center;
   grid-template-columns: [grid-start] repeat(3, minmax(14px, 44px)) [center-start] repeat(6, minmax(14px, 44px)) [center-end] repeat(3, minmax(14px, 44px)) [grid-end];
   gap: 40px 60px;
   color:  #344072;
   width: 100%;
   -webkit-box-align: center;
   align-items: center;
   grid-auto-rows: minmax(75px, auto);
   border-bottom: 0.15rem solid rgb(233, 233, 233);
   font-size: 1.5rem;
   transition: background-color 0.1s ease 0s;
}}

@media only screen and (max-width: 1200px){
   .chartMobileRow
   {
      display: grid;
      -webkit-box-pack: center;
      justify-content: center;
      grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
      row-gap: 30px;
      color:  #344072;
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      grid-auto-rows: minmax(75px, auto);
      border-bottom: 0.15rem solid rgb(233, 233, 233);
      font-size: 1rem;
   }}

@media only screen and (min-width: 1201px){
.rank{
   grid-column: span 1 / auto;
   font-size: 1.5rem;
   font-weight: 100;
   align-self: flex-start;
   margin-top: 20px;
   text-align: center;
   
}}


@media only screen and (max-width: 1200px){
   .rank{
      grid-column: span 1 / auto;
    font-size: 1.313rem;
    font-weight: 100;
    text-align: center;
    align-self: flex-start;
    margin-top: 20px;
      
   }}

@media only screen and (min-width: 1201px){
.coverAndTitleAndRole{
   grid-column: span 5 / auto;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
}}


@media only screen and (max-width: 1200px){
   .coverAndTitleAndRole{
      grid-column: 2 / span 5;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
   }}
   
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

@media only screen and (min-width: 1201px){
.titleAndPlayer{
   margin-left: 30px;
   display: flex;
   -webkit-box-align: baseline;
   align-items: baseline;
   overflow: hidden;
}}

@media only screen and (max-width: 1200px){
.titleAndPlayer {
   margin-left: 1.5rem;
   min-width: 0px;
   font-size: 100%;
   font-weight: inherit
   line-height: 1.125;
}}

.title, .player, .detalles {
   margin-right: 3em;
}
.title{
   overflow-wrap: break-word;
   word-break: break-word;
 
 
   text-overflow: ellipsis;
   white-space: nowrap;
  
 
   
}

.player{
   position: relative;
   top: -2px;
   font-weight: 100;
   overflow-wrap: break-word;
   word-break: break-word;
 
   white-space: nowrap;
  
}
@media only screen and (max-width: 1200px){
.detalles {

display: none;
}}
.textLabelContent {
   font-size: 0.75rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(154, 154, 154);
}
@media only screen and (min-width: 1201px){
.playMetadata{
 
   grid-column: span 3 / auto;
   display: flex;
   -webkit-box-pack: end;
   justify-content: flex-end;
   -webkit-box-align: center;
   align-items: center;
}}

@media only screen and (max-width: 1200px){
   .playMetadata{
    
      grid-column: 8 / span 1;
   }}
 
   
   @media only screen and (min-width: 1201px){
  .metadatum{
   flex: 1 1 0%;
   max-width: 50%;
 
   
}}

@media only screen and (max-width: 1200px){
   .metadatum{
    flex: 1 1 0%;
    margin-bottom: 0.25rem;
 
    
 }}
.iconWithLabelContainer{
   display: flex;
   -webkit-box-align: center;
   align-items: center; 
   margin-right: 3em;
}

.icon {
   width: 1rem;
    margin-right: 0.5rem;
    position: relative;
    top: -2px;
    flex-shrink: 0;

}


.icon2 {
   width: 1rem;
    margin-right: 0.5rem;
    position: relative;
    top: -2px;
    flex-shrink: 0;

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
      overflow: visible;
      fill: rgb(255, 20, 100)
   
}
 



.textCount {
   font-size: 0.75rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(255, 20, 100);
}

.metadatumMore {
   flex: 1 1 0%;
    max-width: 50%;
}

.textCount2 {
   font-size: 0.75rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(0, 0, 0);
}
`
}

</style>
       </div>
       </a>)
}

export default coderow