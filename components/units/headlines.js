import Label from './label'
import Title from './title'
import Authordate from './authordate'
import ImageHolder from './imageHolder'
import Link from 'next/link'
import Dekk from './dekk'
import Maintitle from './maintitle'
import React, {useState} from 'react'

export default function headlines(){
    const [ headline, setHeadline ] = useState({
        headline: [
{
label: 'Latest',
maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
author:'Richard Clemons',
}],

otherState:'some other state'
    })

    const switchSpanishHandler = () => {
setHeadline({
    headline:[
        {
label: 'Lo ultimo',
maintitle:'Pelicans frente a los Nets | Highlight del Fogeo | Julio 22, 2020 ',
dekk:'En el primer juego de fogeo en Orlando, los Pelican de Nueva Orleans derrotaron a los Nets de Brooklyn, 99-68. Brandon Ingram lidero a los Pelicans con 12 puntos en la victoria de anoche, mientras que Caris Levert y Jarreet Allen anotaron 10 puntos cada uno por los Nets',
author:'Richard Clemon'

        }
    ]
})
    }
    const switchEnglishHandler = () => {
        setHeadline({
            headline:[
                {
                    label: 'Latest',
                    maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
                    dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
                    author:'Richard Clemons',
        
                }
            ]
        })
            }
    return <>
    <div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>Es </button>
    <button className="buttonStyle" onClick={switchEnglishHandler}>En </button></div><br/><br/>
<Link href="/headline"><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label={headline.headline[0].label}/>
<Maintitle title={headline.headline[0].maintitle}/>
<Dekk dekk={headline.headline[0].dekk}/>
<Authordate author={headline.headline[0].author} date="07/22/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/srimmage.png"/>
 


</div></a></Link>

    

<Link href=" "><a>
<Label label="Prime"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobewallace.jpg"/>
<Title title="What’s Up Next: Here’s Every Album Dropping In June"/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>

    <Link href=" "><a>
<Label label="Prime"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/>
<Title title="What’s Up Next: Here’s Every Album Dropping In June"/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>


<style jsx>
{`

#buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
margin-right: 0.5rem;
}
button {
    width:30px; 
     color: rgb(0, 0, 0);
     overflow-wrap: break-word;
     word-break: break-word;
     background-color: transparent;
     cursor: pointer;
     display: inline-block;
     font-family: Programme, sans-serif;
     font-size: 0.575rem;
     line-height: 1;
     text-align: center;
     vertical-align: top;
     user-select: none;
     -webkit-appearance: none;
     text-transform: uppercase;
     letter-spacing: 1px;
     border-color: rgb(0, 0, 0);
     transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
     border-width: 1px;
   
     border-radius: 5px;
     margin-right: 5px;
     padding: 3px; 
}
   a {
       text-decoration: none;
       color: #000;
   } 
    
   .pageGridFull{
    grid-column: grid-start / grid-end;
   }
    
    .editorialPlacementLink{
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: inherit; 
    }

    .editorialPlacementHeader{
        margin-bottom: 1rem; 
    }
    
    `}
</style>

    </>

}

