  import MediaUrlFull from './mediaUrlFull'


const ultimaHora = (props) => {
    return <>
<li data-time={props.time} className={`${'swipperSlide'} ${'swiperSlideNext'}`}>
<a href={props.href}>
<p><span>
{props.content}
</span></p>
 
<MediaUrlFull mediaUrl={`https://img.youtube.com/vi/${props.extra}/hqdefault.jpg`}
/>

 </a></li>



<style>
  {`
.icon24Hours  svg {
    height: 24px;
    width: 24px;
}
.icon24Hours {
   
    right: -30px;
    top: -2px;
    width: 24px;
    height: 24px;
    text-align: center;
 
    -webkit-border-radius: 100%;
}

svg:not(:root) {
    overflow: hidden;
}
.sectiontitle a {
  position: relative;
  color: ##d00;

}
a {

text-decoration: none;
background: transparent;
}
.sectiontitle {
    position: relative;
    font-size: 17px;
    margin-bottom: 12px;
    padding: 0;
    font-family: Poppins,sans-serif;
    line-height: 22px;
    font-weight: 700;
    color: #d00;
    text-transform: uppercase;

}
p:after{
content: "";
float: right;
position: relative;
top: -20px;
left: 100%;
width: 50px;
margin-left: -50px;
padding-right: 5px;
box-sizing: content-box;
text-align: center;
background: #fff;
background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 25%,#fff);
}


.figImageContent {
    background-image: url(${props.image});
    width: 100%;
    height: auto;
    padding-bottom: 66%;
    margin-top: 16px;
    display: block;
    background-position: 50% 25%;
    background-repeat: no-repeat;
    background-size: cover;

}

.appList li p:after {
    content: '${'\\02026'}' ;
    float: right;
    position: relative;
    top: -20px;
    left: 100%;
    width: 50px;
    margin-left: -50px;
    padding-right: 5px;
    box-sizing: content-box;
    text-align: center;

    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 25%,#fff);
}
.appList li p>:first-child {
    float: right;
    width: 100%;
    margin-left: -5px;
}
.appList li p:before {
    content: "";
    float: left;
    width: 5px;
    height: inherit;  
    box-sizing: inherit; 
}
.appList li p  {
    margin-top: 16px;
    padding-right: 8px;
    height: 58px;
    line-height: 1.2;
    font-size: 16px;
    overflow: hidden;
}
@media (max-width: 768px){
.appList li p  {

    
}}
.appList li a {
    color: #1d1d1b;
    display: block;
    font-size: 17px;
    font-weight: 700;
    padding: 0;
}
.appList li:before {
content: attr(data-time);

left: 0;
top: 0;
height: 24px;
padding: 2px 10px;
background-color: #e41129;
color: #fff;
font-size: .75em;
font-weight: 700;
line-height: 20px;
text-align: center;
overflow: hidden;
white-space: nowrap;
border-radius: 24px;
 
}

:before {
box-sizing: inherit;
}
.swipperSlide {
height: 100%;
}

.appList ul {
display: flex;

}
.appList li {

}


@media (max-width: 767px){
.appList li {
width: 52%;
border-right: 8px solid transparent;

}}

@media (min-width: 768px){
.appList li {
    width: 20%;
}}

 

.appList ul li {
    flex-shrink: 0;
    margin-right: 10px;
}
ul {
list-style-type: none;
}

.swiperWrapper {
    transition-property: transform;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-sizing: content-box;
    transition-property: transform;
    transform: translate3d(0,0,0);
}
section {
display: block;
}
.swiperContainer {
    margin: 0 auto;
    position: relative;

    z-index: 1;   
}
.appList {
overflow: hidden;
max-height: 344px;
padding-top: 50px;
margin-top: -50px;  
color: #1d1d1b;
font-family: Poppins,sans-serif;
font-size: .875em;
line-height: 1.6;
word-break: break-word;
overflow-x: scroll;
} 


  
  
  `}  
</style>

    </>
}

export default ultimaHora