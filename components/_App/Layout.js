import Head from "next/head";
import Header from "./Header";
import Footer2 from '../../components/_App/Footer2'
import HeadContent from "./HeadContent";
function Layout({ children }) {
  
return (
<>
  <Head>
  <HeadContent />
 
   
 
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