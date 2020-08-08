import Head from "next/head";
import Header from "./Header";
import Footer2 from '../../components/_App/Footer2'
import HeadContent from "./HeadContent";
 

function Layout({ children }) {
  
return (
<>
  <Head>
  <HeadContent />
 
  <link rel="stylesheet" type="text/css" href="/static/styles.css" />
  
<title>Hooper Os</title>
        </Head>
    
 <Header/>
 
        <div>
            {children}
        </div>
<Footer2/>
 
</>)
}

export default  Layout