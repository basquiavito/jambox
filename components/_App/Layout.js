import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import Topheader from './Topheader'
import Link from 'next/link'
function Layout({ children }) {
return (
<>
  <Head>
 
    {/**Stylesheet */}
<link rel="stylesheet" type="text/css" href="/static/styles.css" />
<link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
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