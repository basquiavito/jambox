import React,{useState} from 'react'
import Title from '../components/units/title'
import Authordate from '../components/units/authordate'
import Label from '../components/units/label'
import ImageHolder from '../components/units/imageHolder'
import Dekk from '../components/units/dekk'
import Parrafo from '../components/units/parrafo'
import HyvorTalk from 'hyvor-talk-react'
import { PieChart } from 'react-minimal-pie-chart';
import Youtubehooks from '../components/units/youtubehooks'
import Maintitle from '../components/units/maintitle'
export default function headlines(){
    const [ headline, setHeadline ] = useState({
        headline: [
{
label:'Latest',
maintitle:"James' layup late lifts Lakers past Clippers, 103-101",
dekk:'As NBA scrimmages wrap up, James Harden looks like he is in midseason form. Finishing up with 35 points, 8 rebounds, 6 assists and going 8/13 from 3-point land, Harden put on a show against the Celtics.',
author:'Richard Clemons',
p1:"'Anthony Davis scored 34 points, James had the go-ahead basket with 12.8 seconds left and the Lakers moved closer to clinching the No. 1 seed in the Western Conference playoffs by topping the Los Angeles Clippers 103-101 on Thursday night in the second game of the NBA's re-opening doubleheader. James had 16 points, 11 rebounds and seven assists to help the Lakers move 6 1/2 games ahead of the Clippers in the West with seven games remaining. Kyle Kuzma added 16 points.",
p2:'Paul George had 30 points and Kawhi Leonard scored 28 for the Clippers.',
p3:'The win puts the Lakers 6 1/2 games up in the West with seven games left in this abbreviated regular season. One more win or Clippers loss and they clinch the top seed. They definitely aren’t going 0-7 and the Clippers probably aren’t going 7-0. So you can lock the Lakers in at the top of the conference.',
p4:'The Clippers next play on Saturday against the Pelicans at 3 p.m. PT. The Lakers next play on Saturday against the Raptors at 5:30 p.m. PT.',
p5:' ',
p6: ''
 

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
    </div><br/>
<Label label="Hay Bobo"/> 
    <Maintitle  title={headline.headline[0].maintitle}/>
    <Authordate author={headline.headline[0].author} date="Jul 23, 2020"/>
<Youtubehooks videoIdA="EGct9TOeFFM"/>
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
    <div>
       

       <div className="comment-count-view">

         { /* Comment Counts */ }
         <HyvorTalk.CommentCount 
           websiteId='1313'
           id='a999'
         />

       </div>
      

       { /* Load Comments now */ }
       <HyvorTalk.Embed 
         websiteId='1313'
         id='a999'
       />
     </div>
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