import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
import { Container } from "semantic-ui-react";

function Layout({ children }) {
  
return (
<>
 <Head>

 </Head>
        
    <nav>
    <Toplayout />
    </nav>  
 <Container  text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
 <footer>
<Footer />
 </footer>
 <style jsx>
   {`

 
  
   
   
   `}
 </style>
</>)
}

export default  Layout