import Link from 'next/link'


 function profiles() {
    return<> 
    <div id="profilePagesHub">
    <div className="linkContent"><Link href="/profiles/actives"><a className="linkTitle">actives</a></Link></div>
    <div className="linkContent"><Link href="/profiles/primes"><a className="linkTitle">primes</a></Link> </div>
    <div className="linkContent"><Link href="/profiles/streetball"><a className="linkTitle">Streetball</a></Link></div>
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