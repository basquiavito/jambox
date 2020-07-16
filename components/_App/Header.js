import Link from 'next/link'

export default function Header(){
    return<>
<div>
<div><Link href="/hoopscript/hoopscript"><a>Hoopcodes</a></Link></div>
<div><Link href="/profiles/actives"><a>Actives</a></Link></div>
<div><Link href="/profiles/primes"><a>Primes</a></Link></div>
<div><Link href="/profiles/streetball"><a>Streetball</a></Link></div>



</div>

    </>
}