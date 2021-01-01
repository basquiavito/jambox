 

 

const workhorse = (props) => {
    return <>
    <a className="workHorsePost" href="">
<div className="workHorseDetails">
<span className="workHorseEyerbrow"> {props.eyebrows }</span>
<span className="workHorseDate">{props.date}</span>
</div>

<div className="workHorseContent">
<h2 className="workHorseTitle">{props.title}</h2>
<p className="workHorseDek">{props.dek}</p>
</div>

<div className="workHorseAsset">
<img src={props.asset}/>
 
        </div>


</a>


<style jsx>
 {`

 .workHorseAsset img {
    position: absolute;
    right: 0;
    bottom: -10px;
    vertical-align: top;
    max-width: 50px;
    max-height: 50px;
 }
 img, video, svg {
    max-width: 100%;
    height: auto;
}
 a {
     color: #000;
 }
 .workHorseDetails {
    font-family: Maria,sans-serif;
    font-size: 16px;
    line-height: 1.16667;
    color: inherit;
    margin-bottom: 10px;
    position: relative;
    z-index: 1
    font-weight: 600;
 }
 
 
 .workHorseEyerbrow {
    text-transform: capitalize;
    margin-right: .3em; 
 }

 .workHorseDate {
    color: #ff294c;
 }

 .workHorseContent {
    position: relative;
    z-index: 1;
 }

 .workHorseTitle {
    font-family: Eksell,serif;
    font-size: 24px;
    line-height: 1;
    letter-spacing: .005em;
    padding-right: 65px; 
 }

 .workHorseDek {
    font-family: Fakt,sans-serif;
    font-size: 14px;
    line-height: 1.28571;
    color: #666;
    margin-top: 14px;
    padding-right: 65px;
    min-height: 2.57143em;
 }

 .workHorseAsset {
    background-size: auto 3px;
    background-repeat: repeat-x;
    background-position: 100% 100%;
    position: relative;
    height: 15px;
    min-height: 15px;
    background-image:url('https://hooperos.s3.us-east-2.amazonaws.com/tables/outline.svg')
 }
 `}   
</style>


    </>
}


export default workhorse