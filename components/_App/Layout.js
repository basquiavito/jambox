import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
  
function Layout({ children }) {
  
return (
<>
    
    <Toplayout />
 
<br/><br/><br/>
<div className="pageGrid">
<div className="gridCenter">
 
        {children}
   
    
      </div></div>
    
 <footer>

 </footer>
<style jsx>
  {`
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
</>)
}

export default  Layout