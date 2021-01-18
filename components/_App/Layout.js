import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
import { Container, Divider } from "semantic-ui-react";
 
function Layout({ children }) {
  
return (
<>
         
    <nav>
    <Toplayout />
    </nav>  

  
 <Container    >
        {children}
  
        </Container>
    
   
 <footer>

 </footer>
<style jsx>
  {`
  
  
  `}
</style>
</>)
}

export default  Layout