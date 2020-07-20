import React from 'react'
const abbr = {
    border: 'none',
    cursor: 'pointer',
    margin: '0 0 0 2px',
    fontSize: '1.2rem'
  }
    const profileData = (props) => {
        return(
            <div className="ptrait">
              <div className="playerTabContent">
    <div className={`${"tabsPanel"} ${"isActive"}`} id="playerTabInfo" >
<section className={`${"playerVitalsWrapper"} ${"row"} ${"expanded"}`}>
    <section className={`${"playersVital"} ${"small12"} ${"large6"}`} >
    <section className={`${"vitalsTop"} ${"row"} ${"expanded"}`}>
    <section className={`${"playerVitalstopLeft"} ${"small6"}`}>
<p className="topHeading">Height</p>
<p className="infoImperial">
    <span>
        { props.feet}
        <abbr style={abbr} title="feet">ft</abbr>
    </span>
    <span>{props.inches}
    <abbr style={abbr} title="inches">in</abbr>
    </span>
</p>
<p className="infoMetric">
    / { props.meters} <abbr  style={abbr} title="meters">m</abbr>
</p></section>

<section className={`${"playerVitalstopRight"} ${"small6"}`}>
<p className="topHeading">Weight</p>
<p className="infoImperial">
    <span>
        { props.lbs}
        <abbr style={abbr} title="feet">lbs</abbr>
    </span></p>
     <p className="infoMetric">
         / { props.kg} <abbr title="kilograms">kg</abbr>
     </p>


</section>

</section>

<section className={`${"vitalsBottom"} ${"menu"} ${"vertical"}`}>
<ul>
<li>
    <span className="bottomHeadings">Born</span>
    <span className="bottomHeadingInfo">{ props.born}</span>
</li>
<li>
<span className="bottomHeadings">from</span>
    <span>{ props.from}</span>
</li>
<li>
<span className="bottomHeadings">NBA debut</span>
    <span>{props.debut}</span>
</li>
<li>
<span className="bottomHeadings">Years in NBA</span>
    <span>{props.years}</span>
</li>




</ul>
</section>

 






</section></section>
    </div>
</div>



<style jsx>{`

/* dtab ftab and more dtab dtab dtab dtab*/

.playerTabContent{
  display: block;
  background-color:rgb(18 18 18); 
  color:#fff;
  font-weight:300;
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
  color:#fff;

}
.infoImperial span {
  margin: 0 5px 0 0;
    font-size: 1.6em;
    font-family: "Flama-Medium",sans-serif;
    color:#fff;
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
  color:#fff;
 
 
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
  color:#fff;
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
.ptrait {
 
  margin-bottom: 3rem;
 
 
}
/*End on dtab ----dtab finished here ---end of dtab ------*/





`}</style>
            </div>


        )
    }
    
    export default profileData
    
  