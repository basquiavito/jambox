import Sectiontitle from '../components/units/sectiontitle'
import Sectionsubtitle from '../components/units/sectionsubtitle'
import Obb from '../components/units/obb'
import Link from 'next/link'
import Title from '../components/units/title'
import RowHeader from '../components/units/neflix/rowHeader'

export default  function obb(f1){
 
return(
<>
<Sectiontitle title="Hoopscript" />
 <Sectionsubtitle subtitle="Student of the game"/><hr/>

 <div className="obbContainer">
 <div className="pageGrid">
<div className="gridCenter">
    <Title title="The OBB box"/>
 < Obb f1='8' b1='0' s1='x' f2='F' b2='0G'/><br/>

 <div  className="eContainer">
<h2>Footwork</h2>


<ul>
<li><Link href="/obb/stepback"><a>Step back :<span>6</span>  </a></Link></li>
<li><Link href="/obb/spinmove"><a>Spin Move :<span>7</span> </a></Link></li>
<li><Link href="/obb/ocho"><a>First Step :<span>8</span> </a></Link></li>
<li><Link href="/obb/stepforward"><a>Step Forward :<span>F</span>  </a></Link></li>
<li><Link href="/obb/postingup"><a>Posting Up :<span>P</span> </a></Link></li>
<li><Link href="/obb/hesitation"><a>Hesitation :<span>H</span> </a></Link></li>
<li><Link href="/obb/chasse"><a>Hesitation Escape :<span>H</span> </a></Link></li>
<li><Link href="/obb/stutterstep"><a>Stutter Step :<span>SS</span> </a></Link></li>
</ul>
<br/></div>

<div className="eContainer">
<h2>Ball Movements</h2>
<ul>
<li><Link href="/obb/crossover#bounce"><a>Bounce :<span>0</span>  </a></Link></li>
<li><Link href="/obb/crossover#crossover"><a>Crossover :<span>1</span> </a></Link></li>
<li><Link href="/obb/crossover#behind"><a>Behind the back :<span>2</span> </a></Link></li>
<li><Link href="/obb/crossover#between"><a>Between the legs :<span>3</span>  </a></Link></li>
<li><Link href="/obb/crossover#reverse"><a>Reverse :<span>4</span> </a></Link></li>
<li><Link href="/obb/crossover#inandout"><a>In and Out :<span>5</span> </a></Link></li>
 <li><Link href="/obb/shammgod"><a>Shammgod :<span>9</span> </a></Link></li>
 <li><Link href="/obb/nutmeg"><a>Nutmeg :<span>N</span> </a></Link></li>
</ul>
<br/>
</div> 


<div className="eContainer">
<h2>Shooting</h2>
<ul>
<li> Grab : <span>G</span>   </li>
<li><Link href="/obb/shooting"><a>Shoot :<span>$</span> </a></Link></li>
</ul>
<br/>
</div>

 </div></div></div>

<div>
<div className="pageGrid">
<div className="gridCenter">


 


 
 
 

<br/>
</div></div></div>
<style jsx>
    {
        `
ul > li {
    list-style-type: none;
}
.despedida {
    margin: 2rem 0px;
    padding: 1rem 1.25rem;
    background: rgb(247, 247, 247);
}

 .invertido {
    color: white;
    box-shadow: rgba(0, 118, 255, 0.39) 0px 4px 14px 0px;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0px;
    border-radius: 7px;
    background: rgb(0, 112, 243);
    padding: 0px 2rem;
  

}
.fw5{
    font-weight: 400;   
}

.nexpPage{
 
    display: inline-block;
    cursor: pointer;
 
    text-decoration: none;
     
    margin: -0.25rem -0.5rem;
    border-radius: 7px;
    transition: background 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s; 
}
        .formula {
            display: inline-block;
            border: 1px solid red;
            margin-bottom: 1rem;
            padding: 1em;
       
        }

  

       a > span {
            margin-left: 8px;
            color: green;
        }
        .stride {
            background-color: rgb(255 255 100);
        }

        .nextPage{
            color: white;
    box-shadow: rgba(0, 118, 255, 0.39) 0px 4px 14px 0px;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0px;
    border-radius: 7px;
    background: rgb(0, 112, 243);
    padding: 0px 2rem;
        }
        
        .obbContainer{
            margin-bottom: 2rem;
        }
        .pageGrid{
            display: grid;
            -webkit-box-pack: center;
            justify-content: center;
            grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
            grid-row-gap: 30px;
        
        }
           .gridCenter{
              grid-column: center-start / center-end;
           }

       
        
        `
    }
</style>
    </>


    )
}
 