import React,{useState} from 'react'
import Title from '../components/units/title'
import Authordate from '../components/units/authordate'
import Label from '../components/units/label'
import ImageHolder from '../components/units/imageHolder'
import Dekk from '../components/units/dekk'
import Parrafo from '../components/units/parrafo'

export default function headlines(){
    const [ headline, setHeadline ] = useState({
        headline: [
{
label: 'Latest',
maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets.',
author:'Richard Clemons',
p1:" ", p2:"", p3:"", p4:"", p5:"", p6:"", p7:"", p8:""

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

 
    <div className="pageGrid">

        <div className="gridCenter">
    
<Label label="Hay Bobo"/> 
    <Title  title={headline.headline[0].maintitle}/>
    <Authordate author={headline.headline[0].author} date="Jul 23, 2020"/>
    <ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobeShaq.jpg"/>
    <Dekk dekk={headline.headline[0].dekk}/>
    <Parrafo />
    
    </div> </div>

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