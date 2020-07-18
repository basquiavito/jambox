import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import Topheader from './Topheader'
 
 
function Layout({ children }) {
  
return (
<>
  <Head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>


 
<title>Basketball's News, Plays, Profiles & Articles | Hoopscript</title>
        </Head>
        <Topheader />
        <Header/>
        <Aux>
            {children}
        </Aux>

 
</>)
}

export default  Layout