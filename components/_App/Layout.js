import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import Topheader from './Topheader'
 
function Layout({ children }) {
  
return (
<>
  <Head>
  <meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  
  <link rel="stylesheet" href="/static/index.css"/>
 
<title>Basketball's News, Plays, Profiles & Articles | Hoopscript</title>
        </Head>
 <Topheader/>
   
        <Aux>
            {children}
        </Aux>

 
</>)
}

export default  Layout