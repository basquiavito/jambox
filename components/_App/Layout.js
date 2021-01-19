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
<br/><br/><br/>
  <main>
 <Container>
        {children}
   
        </Container>
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