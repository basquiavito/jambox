import Head from "next/head";
 import Toplayout from  './toplayout' 
 import Footer from './Footer2'
import { Container } from "semantic-ui-react";


function Layout({ children }) {
  
return (
<>
 <Head>
 <link  
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          media="none"
          onload="if(media!='all')media='all'"

        />
        
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

 
   nav {
     margin-bottom: 2rem;
   }
   
   
   `}
 </style>
</>)
}

export default  Layout