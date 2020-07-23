import Link from 'next/link'
 
 

 
const tableStyle = {padding: '2px'}
const tdStyle = {width:'18px', paddingRight: '4px'}
const tdAImg = { width:'18px', height: '18px', border: '1px solid black'}
const td2ndStyle = { lineHeight: '12pt', height: '10px'}
const td3rdStyle = {textAlign: 'right', paddingRight: '4px'}


export default function Topheader(){
 
 
 
    return<>
<table id="hsmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#0ff">
<tbody><tr><td bgcolor="#0ff">
<table border="0" cellpadding="0" cellspacing="0" width="100%" style={tableStyle} >
<tbody><tr>
<td style={tdStyle}>
<a href="https://hoopscript.vercel.app">
<span  style = {tdAImg} className="" width="18" height="18" alt="H">H</span> </a></td>
<td style={td2ndStyle}>
<span className="pagetop">
<b className="hsname"><Link href="/" ><a >Hoopscript</a></Link></b> <Link href="/obb/obb"><a>hoopcodes</a></Link> | <Link href="/profiles/profiles"><a>profiles</a></Link> | <Link href="/blogs"><a>articles</a></Link> 
</span></td>
<td style={td3rdStyle}><span className="pagetop">
<Link href="/login"><a href="login?goto=news">login</a></Link>
</span></td>
</tr></tbody></table></td></tr></tbody></table>



<style jsx>
  {`
  @media only screen and (max-width:3300px) and (min-width: 300px){
  #hsmain {
      width: 100%;
      margin-bottom: 1.2rem;
    
  }}
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
td {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #828282;
}
  
@media only screen and (max-width: 750px) and (min-width: 300px){
td {
    height: inherit !important;
}}
.tableStyle {
    pading: 2px;
}
a:link {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
}
@media only screen and (max-width: 750px) and (min-width: 300px){
span.pagetop {
    display: block;
    margin: 3px 5px;
    font-size: 12px;
}}
.pagetop {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #222222;
}

@media only screen and (max-width: 750px) and (min-width: 300px){
span.pagetop b {
    display: block;
    font-size: 15px;
}}
.hsname {
    margin-right: 10px;
   margin-bottom: 0.3rem;
}
 
b {
    font-weight: bold;
}
.pagetop a:visited {
    color: #000000;
}

.pagetop > a {
    margin-right: 2.3px;
}
  `}  
</style>
    </>
}