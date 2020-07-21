import Youtubehooks from '../components/units/youtubehooks'
import LazyLoad from 'react-lazy-load';
import Head from 'next/head'
import Link from 'next/link'




 
export default function CodeVideos(){
    return<>

    <Head><title>Codes</title></Head>
   


<div id="codeHouse">
   
<div>
    <div className="pageGrid">
        <div className="gridCenter">
        <LazyLoad>
    <Youtubehooks videoIdA='C977RCbuqFk' videoIdB='gaMMnn1o5gA'/>
    </LazyLoad>
        </div>
    </div>
    
</div>

<section className='videoInfoLandmark' role='region' arial-label='video info' tabIndex='-1'>
<div className="pageGrid">
        <div className="gridCenter">
<div className="videoInfoPanel">
<div className="videoCategories">

<Link href="">
<a className="category0">
<span className="keyboardFocus" tabIndex="-1">Rookie</span>
</a>
</Link>
<hr width="1" size="12" className="hr1"></hr>

<Link href="">
<a className="category1">
<span className="keyboardFocus" tabIndex="-1">HighSchool</span>
</a>
</Link>
<hr width="1" size="12" className="hr1"></hr>

<Link href="">
<a className="category0">
<span className="keyboardFocus" tabIndex="-1">College</span>
</a>
</Link>
 
</div>

 
<h1 className="videoTitle" data-title="Lil Yachty Says He Once Had a Jewelry Addiction">Lil Yachty Says He Once Had a Jewelry Addiction</h1>

<p class="videoDescription">You truly won't believe some of the pieces the rapper has in his collection.</p>
<div className="videoMeta">
<ul><li>
    
    <span className="keyboardFocus" tabIndex="-1">
<Link href=""><a>On the rocks</a></Link>
    </span>
    
    </li></ul>
    <div className="releaseDate">
        Released on Jul/22/2020
    </div>
<div id="videoMetaStatus" className="liveRegion" role="status"></div>
</div>

<div className="transcriptContainer">
    <div className="transcriptHeader">
<h2>Transcript</h2>
    </div>

    <div className="transcriptWrapper">
<div className="videoTranscript">

<div className="transcriptRow">
<div className="transcriptTime">00:00</div>
<div className="transcriptText">
I think at one point in my career, </div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:07</div>
<div className="transcriptText">
it was like a drug, because literally, </div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:11</div>
<div className="transcriptText">
I doubt he got it</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>


<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>


<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>



</div>






    </div>

</div>
</div></div></div>
</section></div>

<style jsx>
{`


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
@media screen and (max-width: 519px) and (max-width: 767px) and (min-width: 320px){
.videoInfoPanel {
    width: 300px;
}}
.videoCategories{
    color: #636363;
    line-height: 11px;
}

div.videoCategories a{
    text-decoration: none;
    text-transform: uppercase;
}
@media screen and (max-width: 767px) and (min-width: 320px)
div.videoCategories a {
    font-size: 10px;
}

div.videoCategories * {
    display: inline-block;
    vertical-align: middle;
}
section.videoInfoLandmark a{
    color: #0096ff;
    font-weight: bold;
}

.keyboardFocus{
    display: inline-block;
    vertical-align: middle;
}

.videoInfoPanel hr{
    background-color: #0096ff;
    border: 0;
    margin: 0 10px;
}

h1 {
    font-size: 24px;
    line-height: 1.1;
    margin: 15px 0;
    color: #000;
    font-family: 'Arial', sans-serif;
}
  p {
    margin: 0 0 20px;
}
.videoMeta{
    font-family: georgia, serif;
}
@media screen and (max-width: 767px) and (min-width: 320px){
.videoMeta{
    font-size: 12px;
}}

div.videoMeta {
    font-size: 14px;
    font-style: italic;
    color: #999;
}

div.videoMeta ul {
    display: inline-block;  
}


.videoInfoPanel{
    padding: 0;
}

div.videoMeta ul li {
    display: inline-block;
    border-right: 1px solid #636363;
    line-height: 1;
    margin-right: 15px;
    padding-right: 15px;
}

.videoInfoPanel ul li{
    list-style-type: none;
}


.videoMeta  a{
    font-family: 'Arial', sans-serif;
    font-style: normal;
    text-decoration: none;
    transition: none;
    display: inline-block;
    color: #0096ff;
    font-weight: bold;
 
}

div.videoMeta {
    font-style: italic;
    color: #999;
}


.videoDescription {
    margin: 0 0 20px;
}

.releaseDate{
    display: inline-block;
}


.videoInfoPanel div.videoMeta .liveRegion{
    position: absolute;
  
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.transcriptContainer{
    border: thin solid #999;
    border-radius: 1px;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    color: #000;
    font-style: normal;
    font-family: 'Arial';
}

.transcriptHeader{
    font-weight: bold;
    padding-bottom: 10px;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
}


.transcriptWrapper{
    overflow-y: scroll;
    width: 100%;
    max-height: 200px;
}

.videoTranscript{
    display: table;
}

.transcriptRow{
display: table-row;
}

.transcriptTime{
    display: table-cell;
    text-align: right;
    line-height: 20px;
    color: #999;
}

.transcriptText{
    display: table-cell;
    padding-left: 30px;
    padding-right: 25px;
    line-height: 20px;
}
`}    

</style>
    </>

}