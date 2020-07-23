import Link from 'next/link'

export default function button(){
    return<>


<div>
    <Link href="/obb/intro"><a role="button" tabIndex="0" className={`${'invertido'} ${'nexpPage'} ${'fw5'}`}>Next →</a></Link>
</div>
   

<style jsx>

{`


.invertido { 
    margin: 0;
    border-radius: 7px;
    color: white;
    background: #0070f3;
    box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
    padding:  1rem;
    height: 3.5rem;
    line-height: 2.5rem;
    text-decoration: none;
 }

`}


</style>

</>
}
