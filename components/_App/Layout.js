import Head from "next/head";
import Header from "./Header";
import Aux from './Aux'
import HeadContent from './headContent'

function Layout({ children }) {
return (
<>
  <Head>
    <HeadContent />
    {/**Stylesheet */}
<link rel="stylesheet" type="text/css" href="/static/styles.css" />
<link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
<title>Hoopscript</title>
        </Head>
        <Header/>
        <Aux>
            {children}
        </Aux>
</>)
}

export default  Layout