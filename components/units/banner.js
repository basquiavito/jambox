 import Link from 'next/link'
import Image from 'next/image'
import React,{useState} from 'react'
export default function Banner(props){
    const [lan, setLan] = useState({
banner:['Hooperos Lab', 'Descubre tu Potencial', 
'Desde Novatos hasta Pro', 'Compra nuevos paquetes y conviertete en legenda',
'Ver Contenido', 'Comprar'
]


    })

    const switchEnglishHandler = ()=> {
        setLan({banner:['Hoopers Lab', 'Discover your Potential', 
        'From Rookie to Pro', 'Buy new Package and Become a Legend',
        'See Content', 'Buy'
        ]})}


        const switchSpanishHandler = ()=> {
            setLan({banner:['Hooperos Lab', 'Descubre tu Potencial', 
            'Desde novatos hasta pro', 'Compra nuevos paquetes y conviertete en legenda',
            'Learn More', 'Buy'
            ]})}
    return <>
<div id="main">
    
<section className="container">
    
<div className="hoopscript">

<div id="buttons">
<button  className="buttonStyle" onClick={switchSpanishHandler}>Español </button>
  <button  className="buttonStyle" onClick={switchEnglishHandler}>English </button>
 </div> 
<div href="" className="unitLink"     target="_self" rel="follow">
&nbsp;

<div className="unitCopyWrapper">

<h2 className="headline">{lan.banner[0]}</h2>
<h3 className="subhead" role="presentation">{lan.banner[1]}</h3>

<div className="pricingInfo">
<p className="price">
<span aria-label="From a to b" role="text">
{lan.banner[2]}
</span>   
</p>

<p className="LabelCorredor">
{lan.banner[3]}
</p>



</div>

<div className="ctaLink">
    
<a href= "https://nba.com" className="icon">
{lan.banner[4]}
</a> 

<a id="move" href={props.href1} className="icon">
{lan.banner[5]}
</a>
</div>

<div className="imageWrapper">
<Image
src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610669340/AIcrossMJ_bmteuq.jpg"
alt={`A photo of  `}
width="540rem"
height="250px"
data-visible="true"
 
className="sizeImage"
/>  
</div>

</div>







</div>

</div>
</section>





</div>



<style jsx>
{`


#buttons {
    margin-top:2rem;
    text-align: center;
    background-color:transparent;
 
    
  }
  button {
    width:60px; 
     color: rgb(0, 0, 0);
     overflow-wrap: break-word;
     word-break: break-word;
     background-color: transparent;
     cursor: pointer;
     display: inline-block;
     font-family: Programme, sans-serif;
     font-size: 0.575rem;
     line-height: 1;
   
     vertical-align: top;
     user-select: none;
     -webkit-appearance: none;
     text-transform: uppercase;
     letter-spacing: 1px;
     border-color: rgb(0, 0, 0);
     transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
     border-width: 1px;
   
     border-radius: 5px;
     margin-right: 5px;
     padding: 3px; 
     text-align: center;
  }
.imageWrapper {
    text-align: center;
    margin-top: 20px;
}
#move {
    margin-left: 40px;
    
}
.icon:after {
    font-family: "SF Pro Icons";
    color: inherit;
    display: inline-block;
    font-style: normal;
    font-weight: inherit;
    font-size: inherit;
    line-height: 1;
    text-decoration: underline;
    position: relative;
    z-index: 1;
    padding-left: .3em;
    top: 0;
    content: ">";
    text-decoration: none;


}
.icon {
    color: #06c;
    letter-spacing: inherit;
    margin-right: 4px;
}
 
    .ctaLink {
        text-align: center;
        font-size: 19px;
        line-height: 1.4211;
        font-weight: 400;
        letter-spacing: .012em;
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;  
    }  

 
.LabelCorredor {
    color: #86868b;
}
@media only screen and (max-width: 734px){
.LabelCorredor {
    margin-top: 10px;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 400;
    letter-spacing: -.016em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}}
.pricingInfo{
    text-align: center;
}
  h3+* {
    margin-top: .8em;
}
@media only screen and (max-width: 734px){
   .price {
    max-width: 200px;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 400;
    letter-spacing: -.016em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 
   } 
}

.price {
    margin-top: 0.4em;
    color: #86868b;
}

 .headline  {
     text-align: center;
     margin-bottom: 0;
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -.005em;
    color:#1d1d1f;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}

 @media only screen and (max-width: 734px){
 .headline  {
    font-size: 32px;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: .004em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
}}

.subhead {
    text-align: center;
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: .004em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    margin-top: 6px;
}
@media only screen and (max-width: 1068px){
    .headline  {
       font-size: 32px;
       line-height: 1.125;
       font-weight: 600;
       letter-spacing: .004em;
       font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
   }}

   @media only screen and (max-width: 734px){
.subhead {
       font-size: 19px;
       line-height: 1.4211;
       font-weight: 400;
       letter-spacing: .012em;
       font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
   }
   @media only screen and (max-width: 1068px){
    .subhead {
  
        font-size: 20px;
        line-height: 1.16667;
        font-weight: 00;
        letter-spacing: .009em;
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
       }

.unitCopyWrapper {
    text-align: center;
    flex-grow: 0;
    z-index: 4;
    pointer-events: none;
    position: relative;
    -webkit-box-flex: 0;
  
    text-align: center;
}
.hoopscript {
    box-sizing: border-box;
    position: relative;
    padding-top: 0px;
    border-style: none;
    overflow: visible;
    border-left-width: 0px;
    border-right-width: 0px;
}
main {
    display: grid;
    width: 100%;
    position: relative;
    background-color: #fbfbfd;
 
}
.container {
    display: grid;
 background-color: #fbfbfd;
    width: 100%;
    height: 500px;
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 
    color: #1d1d1f;
    font-style: normal;
 
   
}

.headline, .subhead {
    text-align: center;
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    -ms-flex-negative: 1;
    flex-shrink: 1;
}


`}



</style>
    </>
}