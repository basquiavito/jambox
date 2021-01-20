import Head from "next/head";
 import PageHeader from './pageHeader'
 
function Layout({ children }) {
  
return <>
<head>
  <link rel="stylesheet" href="./app.css"></link>
</head>
<div id="application">
 <PageHeader/>
 

<div className="pageGrid">
<div className="gridCenter">
 
        {children}
   
    
   </div>
    </div>
    </div>
<style jsx>
  {`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0px;
  padding: 0px;
  border: 0px;
  text-size-adjust: 100%;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  color: #555;
  line-height: 1.15;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
 
}

*, ::before, ::after {
  box-sizing: border-box;
}
 
div {
  display: block;
}

body {
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-family: Programme, Arial, sans-serif;
  line-height: 1.45;
  text-size-adjust: 100%;
}

html {
  line-height: 1;
}

*, ::before, ::after {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: border-box;
}


::selection {
  background-color: rgb(178, 215, 254);
}
 
.pageGrid{

  display: grid;
  -webkit-box-pack: center;
  justify-content: center;
  grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
  grid-row-gap: 30px;}
  
  .gridCenter{
    grid-column: center-start / center-end;
 }
  
  
  `}
</style>
</> 
}

export default  Layout