import Link from 'next/link'

export default function Topheader(){
    return<>
    <div className="headerWrapper">
  <div className="topHeader">
      <div className="topBar">
<div className="wrap">
<div className="headerLogo">
<Link href="/">

<h1><a className="pageTitle">Hoopscript</a></h1></Link>
</div></div>    </div>    </div>
</div><br/><br/><br/>
  



<style jsx>
{`


.pageTitle{
    text-transform: uppercase;
}
a {
    color: #0C4C8A;
    cursor: pointer;
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}
@media only screen and (max-width: 480px){
.pageTitle {
    font-size: 28px !important;
}}
.headerLogo a {
    display: block;
    float: left;
    
    letter-spacing: -3px;
    color: #000;
}
@media only screen and (max-width: 480px){
    .headerLogo h1 {
    position: relative !important;
    top: 8px !important;
    display: block;
    font-size: 28px;
}}
@media only screen and (max-width: 767px){
h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 10px;
}}

h1, h2, h3, h4, h5, h6 {
    color: #222;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 15px;}
.wrap {
    margin: 0 auto;
    max-width: 98%;
    padding: 0;
    position: relative;
}
.topBar .wrap {
    max-width: 1340px;
    margin: 0 auto;
}
@media only screen and (max-width: 1300px){
 .wrap {
    max-width: 94%;
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
.headerWrapper{
    position: relative;
    display: block;
    clear: both;
}
.topHeader {
    text-align: center;
    background-position: center center;
    background-size: cover;

}
.headerMobileContainer{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1rem;
}

.logoLink{
    position: absolute;
    left: 25%;
    transform: translateX(-50%);
}
a {
 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-decoration: none;
}
 
 

`}
</style>
    </>
}