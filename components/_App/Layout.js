import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import Topheader from './Topheader'
import Link from 'next/link'
 
function Layout({ children }) {
  
return (
<>
  <Head>
  
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

<link
rel="stylesheet" media="print" onLoad="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>

 
<noscript><link rel="stylesheet" href="style.css"></link></noscript>
<title>Hoopscript</title>
        </Head>
        <Topheader />
        <Header/>
        <Aux>
            {children}
        </Aux>

 
</>)
}

export default  Layout