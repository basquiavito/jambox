import Link from 'next/link'

export default function Header(){
    return<>
    <nav id="nav">
    <ul className="navi">

    <li>
    <Link href="/hoopscript/hoopscript">
    <a className="navLink" rel="noopener">
    <span className="LinkTitle">hoopcodes</span>  
    </a>
    </Link>
    </li>

    <li>
    <Link href="/profiles/actives">
    <a className="navLink" rel="noopener">
    <span className="LinkTitle">Actives</span>
    </a>
    </Link>
    </li>


    <li>
    <Link href="/profiles/primes">
    <a className="navLink" rel="noopener">
    <span className="LinkTitle">primes</span> 
    </a>
    </Link>
    </li>


    <li><Link href="/profiles/streetball">
    <a className="navLink" rel="noopener">
    <span className="LinkTitle">streetball</span>
    </a>
    </Link>
    </li>


</ul>
</nav>
<style jsx>
{`
#nav {
    height: 41px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(18, 18, 18);

}
#nav > ul {
    display: flex;
    flex-direction: row;
}
#nav > ul >li {
    list-style-type : none;
    margin-right: 2em;
    transition: opacity .3345s cubic-bezier(0.52, 0.16, 0.52, 0.84) .15s,transform .4669s cubic-bezier(0.52, 0.16, 0.52, 0.84) .108s,-webkit-transform .4669s cubic-bezier(0.52, 0.16, 0.52, 0.84) .108s;
}

.navLink{
    height: 0.875rem;
    line-height: 1;
    color: rgb(255, 255, 255);}
    a {
         
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-decoration: none;
    }

    .LinkTitle{
  font-size: 14px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 3.14286;
        text-transform: capitalize;
        color: #f5f5f7;
        position: relative;
        z-index: 1;
    }
`}
</style>
    </>
}