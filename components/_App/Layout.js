import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import Topheader from './Topheader'
import Link from 'next/link'
function Layout({ children }) {
return (
<>
  <Head>


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