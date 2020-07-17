import React from 'react'
 
const abbr = {
    border: 'none',
    cursor: 'pointer',
    margin: '0 0 0 2px',
    fontSize: '1.2rem'
}

const dtab = (props) => {
    return(
        <div>
<div className="playerTabContent">
    <div className={`${"tabsPanel"} ${"isActive"}`} id="playerTabInfo" >
<section className={`${"playerVitalsWrapper"} ${"row"} ${"expanded"}`}>
    <section className={`${"playersVital"} ${"small12"} ${"large6"}`} >
    <section className={`${"vitalsTop"} ${"row"} ${"expanded"}`}>
    <section className={`${"playerVitalstopLeft"} ${"small6"}`}>
<p className="topHeading">Height</p>
<p className="infoImperial">
    <span>
        {props.feet}
        <abbr style={abbr} title="feet">ft</abbr>
    </span>
    <span>{props.inches}
    <abbr style={abbr} title="inches">in</abbr>
    </span>
</p>
<p className="infoMetric">
    / {props.meters} <abbr  style={abbr} title="meters">m</abbr>
</p></section>

<section className={`${"playerVitalstopRight"} ${"small6"}`}>
<p className="topHeading">Weight</p>
<p className="infoImperial">
    <span>
        {props.lbs}
        <abbr style={abbr} title="feet">lbs</abbr>
    </span></p>
     <p className="infoMetric">
         / {props.kg} <abbr title="kilograms">kg</abbr>
     </p>


</section>

</section>

<section className={`${"vitalsBottom"} ${"menu"} ${"vertical"}`}>
<ul>
<li>
    <span className="bottomHeadings">Born</span>
    <span className="bottomHeadingInfo">{props.born}</span>
</li>
<li>
<span className="bottomHeadings">from</span>
    <span>{props.from}</span>
</li>
<li>
<span className="bottomHeadings">NBA debut</span>
    <span>{props.debut}</span>
</li>
<li>
<span className="bottomHeadings">Years in NBA</span>
    <span>{props.years}</span>
</li>

<li>
<span className="bottomHeadings">2K Ratings</span>
    <span>{props.ovr}</span>
</li>


</ul>
</section>

 






</section></section>
    </div>
</div>


<style jsx>
    {`
    
    
.detailHeaderWrapper.row.expanded{
    margin: 0;
    
}

.row.expanded{
    max-width: none;;
}

.detailHeaderWrapper{

    position: relative;
    overflow: hidden;
    height: 180px;
    color: #fff;
    font-size: 1rem;
  

}

.row {
 
    margin-right: auto;
    margin-left: auto;
 
    display: flex;
 
    flex-flow: row wrap;
}
/*-End of Section----------------------------------------------------------------------*/

 
.detailHeaderWrapper .detailHeaderContainer {
    display: block;
    overflow: hidden;
    position: relative;
}


.detailHeaderWrapper .detailHeaderContainer{
    padding: 50px 0 0 0;
    z-index: 1;

}

.small-12{
    flex: 0 0 100%;
    max-width: 100%;

}

/*---------------------------------------------------------------*/


.playerHeadshot{

width: 158px;
}

article, aside, footer, header, nav, section {
    display: block;
}

.playerHeadshot img {
    width: 100%;
    display: inline-block;
 
    height: auto
}

.playerHeaderDetails{
    padding: 5px 0 0 0;
}

.playerHeaderDetails p{
    line-height: 1em;  
}


 
.detailHeaderWrapper .headerDetailsTop {
    position: absolute;
    padding: 8px 0 0 5px;
    top: 0;
    left: 160px;
    width: 50vw;
}
.teamLogo{
 
    display: inline-block;
    width: 43px;
    height: 35px;
    background-size: 100%;
    margin: 0 6px 0 0;

}
a {
    line-height: inherit;
    color: #1779ba;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
}

.jerseyNumber.playerPosition{
 
    font-size: 0.875em;
    position: relative;
    
}

.headerSeparator{

    background-color: #fff;
    width: 1px;
    display: inline-block;
    height: 20px;
    margin: 0 5px -5px 5px;

}

 
.detailHeaderWrapper .headerDetailsBottom {
    position: absolute;
    top: 64px;
    left: 170px;
    font-size: 0.75em;
    

}

.firstName{
   font-weight: 600;
    margin: 8px 0 0 0; 
    font-size: 1.25em;
    font-family: "Flama-Medium", sans-serif;
}

.lastName{
    font-size: 1.5625em;
    font-weight: 700;
 

}

.detailHeaderWrapper  p {
    margin: 0;
    font-family: "Flama-Medium", sans-serif;
  
}

 
.detailHeaderWrapper .headerButton {
    padding: 10px 15px 0 0;
    position: relative;
    top: -5px;
    width: 50vw;
    right: -10px;
}


.detailHeaderWrapper .headerButton{

text-align: right;
flex: 1;



}

 
.detailHeaderWrapper .headerButton {
    top: -70px;
    position: absolute;
    left: 159px;
}


 
.detailHeaderWrapper .headerButton .buttonFollow {
    top: -70px;
    position: absolute;
    left: 159px;
}

.buttonFollow{
    font-size: 0.875em;
    width: 123px;
    border: 1px solid #fff;
    font-family: "Flama-Bold",sans-serif;
    padding: 10px 10px;
    text-align: center;
    border-radius: 25px;
    text-transform: uppercase;
    color: #fff;


}

button {
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
 
 
    background: transparent;
    line-height: 1;
}



 


.teamSixers::after {
    content: "";
    background: url('https://s3.amazonaws.com/pedales.net/Philadelphia_76ers_logo.svg.png') center center/100% no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
}

/* dtab ftab and more dtab dtab dtab dtab*/

.playerTabContent{
  display: block;
border: 1px solid #d00;
margin-bottom: 1rem;


}

#playerTabInfo{

  padding: 0;
}
.playerVitalsWrapper{

  margin: 0
}
.row.expanded {
  max-width: none;
}

.row {
  display: flex;
  flex-flow: row wrap;
  
}
.playersVital, .playerVitalsWrapper{

  padding: 20px;
 
}
.small12{
background-color:#4183c4; 
  flex: 0 0 100%;
    max-width: 100%;
}

.vitalsTop{
  margin: 0;
  margin-bottom: 2rem;

}

.small6{

  flex: 0 0 50%;
    max-width: 50%;
}

.topHeading{
  
  margin: 0;
    line-height: 1;
    font-size: 0.75em;
    font-family: "Flama-Bold",sans-serif;
    color: #66737C;
    font-weight: 600;
    text-transform: uppercase;

}
.infoImperial{
  margin: 5px 0;
  line-height: 1;

}
.infoImperial span {
  margin: 0 5px 0 0;
    font-size: 1.6em;
    font-family: "Flama-Medium",sans-serif;
    color: #11202B;
}

.infoMetric{
  line-height: 1;
}

.playerVitalstopRight{
  flex: 0 0 50%;
  max-width: 50%;
  color:#fff;

}
.vitalsBottom{
  margin-top: 20px;
 
}

.menu {
  margin: 0;
  list-style-type: none;
  margin-bottom: 2rem;
}
.vitalsBottom ul{
  margin: 0;

}
.vitalsBottom ul li {
  padding: 4px 0;
  border-bottom: 1px solid #CCD0D3;
 
  display: flex;
}


.bottomHeadings{

  margin: 7px 0 0 0;
  line-height: 1;
  font-size: 0.75em;
  font-family: "Flama-Bold",sans-serif;
  color: #66737C;
 font-weight: 600;
  align-self: auto;
  text-transform : uppercase;
}

.bottomHeadingInfo{
  font-family: "Flama-Basic",sans-serif;
  font-size: 1em;

}
.vitalsBottom ul li span {
  flex: 1;
  align-self: flex-end;
  display: inline-block;
}

/*End on dtab ----dtab finished here ---end of dtab ------*/

/* profile hub here profile hub */

 
 .pageGridCenter{
grid-column: center-start / center-end;}
  

.sectionTitle{
  color: rgb(0, 0, 0);
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    letter-spacing: 2px;
    grid-column: grid-start / grid-end;
    margin-bottom: 1rem;
}
    
    
    `}
</style>
        </div>
    )
}

export default dtab