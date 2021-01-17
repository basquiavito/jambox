import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
import { Container } from "semantic-ui-react";
 
function Layout({ children }) {
  
return (
<>
         
    <nav>
    <Toplayout />
    </nav>  

   <main> 
 
        {children}
        </main>
   
 <footer>
 
 </footer>
<style jsx>
  {`
 
    
  
  
  `}
</style>
</>)
}

export default  Layout