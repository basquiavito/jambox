import Link from 'next/link'
import Head from 'next/head'

 function profiles() {
    return<> 
    <Head>
        <title></title>
      
 <link
rel="stylesheet" media="print" onLoad="this.media='all'"
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 </Head>
 
    <div id="profilePagesHub">
    <div className="linkContent"><Link href="/profiles/actives"><a className="linkTitle">actives</a></Link></div>
    <div className="linkContent"><Link href="/profiles/primes"><a className="linkTitle">primes</a></Link> </div>
    <div className="linkContent"><Link href="/profiles/streetballs"><a className="linkTitle">Streetball</a></Link></div>


    <Link href="/"><a>Back Home</a></Link>
 </div>
    <style jsx>
     {`
     #profilePagesHub{
         margin-top: 60px;
         display: block;
        text-align: center;



     }
     .linkContent{
         display: block;
text-transform: uppercase;
text-decoration: underline;
margin-bottom: 40px;
letter-spacing: 2px;
 }

.linkTitle{
    color: #000;
    font-family: arial;
}
     
     
     
     `}   
    </style>
    
    
    </>
}
export default profiles