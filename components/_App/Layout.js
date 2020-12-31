import Head from "next/head";
  
 
import { Container } from "semantic-ui-react";


function Layout({ children }) {
  
return (
<>
 <Head>
 <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
 </Head>
        
      
    
 <Container text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
 
 
</>)
}

export default  Layout