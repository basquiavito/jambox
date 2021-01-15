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
 
        {children}
 
      </body>
 <footer>
<Footer />
 </footer>

</>)
}

export default  Layout