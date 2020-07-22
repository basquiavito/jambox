import React, {Component} from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'


export default class  Header extends Component{
     
    render(){
        return<>
        <nav id="nav">
        <ul className="navi">
    
        <li>
        <Link href="/obb/obb">
        <a className="navLink" rel="noopener">
        <span className="LinkTitle">OBB</span>  
        </a>
        </Link>
        </li>
    
        <li>
        <Link href="/profiles/profiles">
        <a className="navLink" rel="noopener">
        <span className="LinkTitle">Profiles</span>
        </a>
        </Link>
        </li>
    
    
        <li>
        <Link href="/blogs">
        <a className="navLink" rel="noopener">
        <span className="LinkTitle">Articles</span> 
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
    background: #fff;


}
#nav > ul {
    display: flex;
    flex-direction: row;
    
}
#nav > ul >li {
    list-style-type : none;
    margin-right: 2em;
 
   
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
    
  font-size: 12px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 3.14286;
         text-transform: uppercase;
        color: #000;
        position: relative;
        z-index: 1;
    }
`}
</style>
    </>
}}