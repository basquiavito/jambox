export default function nav(){
return <>
<nav id="siteNavigation"  role="navigation" aria-label="Main Menu">

 
  
   
        <a href="https://hooperos.com/"  rel="noopener" className="navLink">
     <span className="linkLabel">News</span>  
        </a>
    

     
        <a href="https://hooperos.com/" rel="noopener" className="navLink" >
        <span className="linkLabel">Chart</span>
        </a>
   

      
        <a href="https://hooperos.com/" rel="noopener"  className="navLink">
        <span className="linkLabel">codes</span>
        </a>
      

        
        <a href="https://hooperos.com/" rel="noopener"  className="navLink">
        <span className="linkLabel">TBT</span>
        </a>
      
 
      
    </nav>
    <style jsx>
        {`
a {
    color: #0C4C8A;
    cursor: pointer;
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}
.linkLabel  {
       
        }
.navLink span {
    white-space: nowrap;
    position: relative;
    top: -1px;
}
.linkLabel {
    font-size: 0.875rem;
    font-family: montserrat, sans-serif;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(255, 255, 255); 
    font-weight: 700;
    display: block;
    letter-spacing: 0.2px;
    vertical-align: baseline;
}

.navLink {
    height: 0.875rem;
    padding: 0px 2.25rem;
    line-height: 1;
    color: rgb(255, 255, 255); 
 
}
@media only screen and (min-width: 280px) {
.navLink {
    height: 0.875rem;
    padding: 0px 0.75rem;
    line-height: 1;
    color: rgb(255, 255, 255); 
}}
@media only screen and (min-width: 380px) {
    .navLink {
        height: 0.875rem;
        padding: 0px 1.75rem;
        line-height: 1;
        color: rgb(255, 255, 255); 
    }}

    @media only screen and (min-width: 768px) {
        .navLink {
            height: 0.875rem;
            padding: 0px 2.25rem;
            line-height: 1;
            color: rgb(255, 255, 255); 
        }}
#siteNavigation {
    height: 41px;
    background: #2b2c2d;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center
}
 
 
        `}
    </style>
    </>
 }