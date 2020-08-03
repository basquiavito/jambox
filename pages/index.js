import Link from 'next/link'

export default function index(){
  return <>
<div id="homeContent">
<div className="pageGrid">
<div className="gridCenter">


 
<div><Link href="/homepage"><a> NBA TODAY</a></Link><br/></div>

<div><Link href="/index2"><a>ACTIVE PLAYERS</a></Link><br/></div>

<div><Link href="/profiles/primes"><a>RETIRED PLAYERS</a></Link><br/></div>

<div><Link href="/archives"><a>ARCHIVES</a></Link><br/></div>

<div><Link href="/blogs"><a>BLOGS</a></Link><br/></div>


</div>
</div></div>
<style jsx>
{`

.pageGrid{
 

    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;}

.gridCenter{
  grid-column: center-start / center-end;
}

`}
 
 
</style>


  </>
}