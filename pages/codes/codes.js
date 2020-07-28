 import Homevideo from '../../components/units/homevideo'
import Head from 'next/head'
 
import VideoCategories from '../../components/units/videoCategory'
import VideoArticlePlusDekk from '../../components/units/videoArticlePlusDekk'
import VideoMetaTitlePlusRelease from '../../components/units/VideoMetaTitlePlusRelease'
import Trancript from '../../components/units/transcript'
 
import YoutubeHooks from '../../components/units/youtubehooks'
import HyvorTalk from 'hyvor-talk-react'
import Obb from '../../components/units/obb'



import React, {useState} from 'react'
const style= {
    backgroundColor:'#000'
}

 
 
export default function CodeVideos(){
    const [ code, setCodes] = useState({
cat:[{cat0: 'Rookie'},{ cat1: 'College'},{ cat2: 'Offense'}] ,
descript:[{title: 'Iverson Crossed Jordan.', name:'Double Picasso + base', code:'013 013 18 G$ ', rank:'Masterpiece'}],
parr:[{triadName:'Picasso + Base', player:'Allen Iverson', vs:'Michael Jordan', triadNum:'013', rawCode:'0F13 0F13 F180 FG$'}],
transcript:[
{code:'013', description:'Picasso is a blueprint. A secuence of a bounce + crossover + between the legs.  This is a blueprint for multiple players, such a Kyrie Irving, Luka Doncic and James Harden.' },
{code1:'18FG$', description1:'Base is the most common dribble used to prepare a jumshot. 18 is a like a built-in function in javascript. Meaning that it is a combo used by every single player in the world, all you gotta do is invoke it. Practicing jumpshot with 18-FG$ from different spots is an excellent exercise for improving your mid-range.  '}]
})




    const switchSpanishHandler = ()=> {
        setCodes({
            cat:[
                {cat0: 'Novato'},{ cat1: 'Colegial'},{ cat2: 'Offensiva'}
            ],
            descript:[{title: 'Iverson Cruzo a Jordan.', name:'Doble Picasso + base', code:'013 013 180 ', rank:'Obra Maestra'}],
            transcript:[{code:808, description: 'Allen Iverson empieza con una stride. Recuerda que la stride se forma por un 8F0 + F + 8.'}]
        })
    }

    const switchEnglishHandler = ()=> {
        setCodes({
            cat:[
                {cat0: 'Rookie'},{ cat1: 'College'},{ cat2: 'Offense'}
            ],
            descript:[{title: 'Iverson Crossed Jordan.', name:'Double Picasso + base', code:'013 013 180 ', rank:'Masterpiece'}],
            transcript:[{code:808, description: 'Allen Iverson start the play with an stride.'}]



        })
    }
    return<>
<Head>
<title>Codes</title>
</Head>
   
<div style={style}>
<section className='videoInfoLandmark' role='region' arial-label='video info' tabIndex='-1'>
<div className="pageGrid">
<div className="gridCenter">
<div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>ESPAÑOL </button>
    <button  className="buttonStyle" onClick={switchEnglishHandler}>ENGLISH </button>
    </div><br/><br/>

<div className="videoInfoPanel">

<YoutubeHooks videoIdA="C977RCbuqFk"/>

<Obb f1='X' b1='0' s1='X' f2='F' b2='1' s2='X' f3='X' b3='3' s3='X' f4='X' b4='0' s4='X' f5='F' b5='1' s5='X' f6='X' b6='3' s6='X' f7='F' b7='1' s7='X' f8='8' b8='XG' s8='X' f9='F' b9='X' s9='$'/><br/>
<VideoCategories cat0={code.cat[0].cat0} cat1={code.cat[1].cat1} cat2={code.cat[2].cat2}/>
<VideoArticlePlusDekk title={code.descript[0].title} name={code.descript[0].name}  code={code.descript[0].code} rank={code.descript[0].rank}/>
<VideoMetaTitlePlusRelease date='Jul 28, 2020'  />
<Trancript code={code.transcript[0].code} description={code.transcript[0].description} 
code1={code.transcript[1].code1} description1={code.transcript[1].description1}/>

</div>




</div></div>
</section></div>

<div>
<div className="pageGrid">
<div className="gridCenter">
    <div>
<div className="comment-count-view">
 
 { /* Comment Counts */ }
 <HyvorTalk.CommentCount 
  websiteId='1313'
  id='codesMain'
 />

</div>



{ /* Load Comments now */ }
<HyvorTalk.Embed 
 websiteId='1313'
 id='codesMain'
/>
</div>


  </div>
</div></div>
<style jsx>
{`
 
#buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
margin-right: 0.5rem;
}
button {
    width:60px; 
     color: #fff;
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
     border-color: #fff;
     transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
     border-width: 1px;
   
     border-radius: 5px;
     margin-right: 5px;
     margin-top: 0.5rem;
     padding: 3px; 
}
 
.pageGrid{
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;
    font-family: 'Arial', sans-serif;


}
   .gridCenter{
      grid-column: center-start / center-end;
     
   }


.videoInfoPanel{
    color: #999;
    
  
 
}
.mixtapeCard{
    padding: 0 1px;
   
    box-sizing: border-box;
  
   
    
 

 
`}    

</style>
    </>

}