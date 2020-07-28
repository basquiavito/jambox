import React,{useState} from 'react'
import Title from '../components/units/title'
import Authordate from '../components/units/authordate'
import Label from '../components/units/label'
import ImageHolder from '../components/units/imageHolder'
import Dekk from '../components/units/dekk'
import Parrafo from '../components/units/parrafo'

export default function Editorial(){
    const [ headline, setHeadline ] = useState({
        headline: [
{
label:'Hoopcodes',
maintitle:'PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”',
dekk:'In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. ',
author:'Richard Clemons',
p1:'Only because you fell doesnt mean it is a foul',
p2:'Three is better than two, sometimes.',
p3:'book',
p4:'table',
p5:'car',
p6: 'glasses'
 

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
author:'Richard Clemon',
p1:'Solo porque te caigas no significa que sea foul.',
p2:'Aveces tres es mejor que dos.',
p3:'libro',
p4:'mesa',
p5:'carro',
p6: 'lentes'
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
                    p1:'Only because you fell doesnt mean it is a foul',
        p2:'Three is better than two, sometimes.',
        p3:'book',
p4:'table',
p5:'car',
p6:'glasses'
                }
            ]
        })
            }


            return <>

 
    <div className="pageGrid">

        <div className="gridCenter">
        <div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>ESPAÑOL </button>
    <button  className="buttonStyle" onClick={switchEnglishHandler}>ENGLISH </button>
    </div><br/><br/>
<Label label="Hay Bobo"/> 
    <Title  title={headline.headline[0].maintitle}/>
    <Authordate author={headline.headline[0].author} date="Jul 23, 2020"/>
    <ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobeShaq.jpg"/>
    <Dekk dekk={headline.headline[0].dekk}/>
    <Parrafo
    p1={headline.headline[0].p1} 
    p2={headline.headline[0].p2}
    p3={headline.headline[0].p3}
    p4={headline.headline[0].p4}
    p5={headline.headline[0].p5}
    p6={headline.headline[0].p6}
    p7={headline.headline[0].p7}
    
    />
    
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
         #buttons{
            display: flex;
            flex-direction: row;
            justify-content: center;
        margin-right: 0.5rem;
        }
        button {
            width:60px; 
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
        
        
        
        `}
    </style>
            </>

        }