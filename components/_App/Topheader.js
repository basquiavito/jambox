import Link from 'next/link'

export default function Topheader(){
    return<>
    <div className="topHeader">
<div className="headerMobileContainer">
<Link href="/"><a className="logoLink"><h1>Hoopscript</h1></a></Link>
</div></div>


<style jsx>
{`
.topHeader {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 41px;
    background: #00788C;

    text-transform: uppercase;
}
.headerMobileContainer{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1rem;
}

.logoLink{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
a {
 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-decoration: none;
}
.logoLink h1{
    height: 29px;
    top: 4px;
    color: #fff;
}
 

`}
</style>
    </>
}