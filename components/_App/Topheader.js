import Link from 'next/link'

export default function Topheader(){
    return<>
    <div className="topHeader">

<div className="topBar">
<div className="wrap">
<div id="headerLogo">
<a href="/" id="headerLogo">
<img src=""/>
</a>
<h1> <Link href="/"><a id="headerPageTitle" >HOOPSCRIPT.COM</a></Link></h1>
                            </div>
                            
              <div id="topBarLinks">              
                            
                            <ul>
<li><a id="top-bar-shop" href="https://shop.ballislife.com/?utm_source=ballislife.com&amp;utm_medium=button&amp;utm_campaign=website-desktop-header" target="_blank">
 Shop
</a>
</li>
<li>
<a id="top-bar-podcasts" href="/podcasts">Podcasts </a>
</li></ul>
</div>
</div>  
</div>  
 <div id="sticky-header-sticky-wrapper" class="sticky-wrapper"  ><div id="sticky-header" class="clearfix" >
<div class="wrap">
<div class="main-header clearfix">

 
<div id="site-branding">
<div id="site-detail">
<div id="site-title">
<a href="https://ballislife.com/" title="Hoopscript.com" rel="home"> Hoopscript.com </a>
</div>
 
 
</div>
</div>  
 

</div> 
</div>  
</div></div> 

</div>

<style jsx>
{`
.topHeader {
    text-align: center;
    background-position: center center;
    background-size: cover;
    background-color: rgb(18 18 18);

}
@media only screen and (max-width: 480px){
#topBarLinks{
    display: block !important;
    float: right;
    margin-right: 5px;
    position: absolute;
    top: 7px;
    width: 158px;
    height: 52px;
    right: 0px
    font-size: 20px;
    position: relative !important;
    top: -11px !important;
}}
#topBarLinks ul li {
    margin-left: 12px;
    float: right;
    list-style: none !important;
}
@media only screen and (max-width: 480px){
#topBarLinks ul li:before {
    font-size: 19px
    content: '|';
    color: #fff;
    vertical-align: top;
}}
    @media only screen and (max-width: 767px){
    .topBar {
        padding-left: 10px;
        padding-top: 1px;
    }}
    @media only screen and (max-width: 980px){
    .topBar {
        padding-left: 10px;
    }}
    @media only screen and (max-width: 1023px){
    .topBar {
        padding-left: 10px;
    }}
    @media only screen and (max-width: 1300px){
    .topBar {
        padding-left: 10px;
    }}
.wrap{
    max-width: 1340px;
    margin: 0 auto;
 
    max-width: 98%;
    padding: 0;
    position: relative
}
 
@media only screen and (max-width: 1300px){
    .wrap{
        max-width: 94%;
    }
}

#headerLogo a{
    display: block;
    float: left;
    font-size: 41px;
    letter-spacing: -3px;
    color: #fff;
}
a {
     
    cursor: pointer;
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}
@media only screen and (max-width: 480px){
#headerLogo h1 {
    position: relative !important;
    top: 8px !important;
    display: block;
    font-size: 28px;
}}
ol, ul {
    list-style: none;
    margin: 0;
}

`}
</style>




    </>
}