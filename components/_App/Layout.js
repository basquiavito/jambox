import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
  
function Layout({ children }) {
  
return (
<>
         
    <nav>
    <Toplayout />
    </nav>  
<br/><br/><br/>
  <main>
 
        {children}
   
    
        </main>
    
 <footer>

 </footer>
<style jsx>
  {`
  main {
    max-width: 38rem;
    padding: 1rem;
    margin: 0;
  }
  
  
  `}
</style>
</>)
}

export default  Layout