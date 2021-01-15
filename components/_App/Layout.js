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

    <body>
 <Container  text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
      </body>
 <footer>
<Footer />
 </footer>

</>)
}

export default  Layout