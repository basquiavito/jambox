import Head from "next/head";
import Header2 from "./Header2";
import Aux from './Aux'
import Topheader from './Topheader'
import Footer2 from '../../components/_App/Footer2'
import HeadContent from "./HeadContent";
function Layout({ children }) {
  
return (
<>
  <Head>
  <HeadContent />


   
  <link rel="stylesheet" href="/static/index.css"/>
  <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
<title>Hooper Os</title>
        </Head>
 <Header2/>
   
        <div>
            {children}
        </div>
<Footer2/>
 
</>)
}

export default  Layout