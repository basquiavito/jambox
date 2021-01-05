const gems = () => {
    return <>
<div id="homeContent">
<div className="ballWorkBox">
<b>Footwork </b>
<ul>
<li><span className="name">Step-back</span> <span className="value">6</span></li>
<li><span className="name">Step-spin</span> <span className="value">7</span></li>
<li><span className="name">First-Step</span> <span className="value">8</span></li>
<li><span className="name">S-Forward</span> <span className="value">F</span></li>
<li><span className="name">Post Up</span> <span className="value">P</span></li>
<li><span className="name">Hesitation</span> <span className="value">H</span></li>
<li><span className="name">Chasse</span> <span className="value">CH</span></li>
</ul>
</div>
<div className="footWorkBox">
    <b>Ballwork</b>
<ul>
<li><span className="name">Bounce</span> <span className="value">0</span></li>
<li><span className="name">Cross</span> <span className="value">1</span></li>
<li><span className="name">Behind</span> <span className="value">2</span></li>
<li><span className="name">Between</span> <span className="value">3</span></li>
<li><span className="name">Reverse</span> <span className="value">4</span></li>
<li><span className="name">In&out</span> <span className="value">5</span></li>
<li><span className="name">Sham</span> <span className="value">9</span></li>
</ul>



</div>
 
<div className="shootingBox">
<b>Shooting</b>
<ul>
<li><span className="name">Grab</span> <span className="value">G</span></li>
<li><span className="name">Shoot</span> <span className="value">$</span></li>
</ul>


</div>

</div>
<style jsx>
{`
#homeContent {
display: flex;
  background-color: #ffe500;
padding: 10px;
justify-content: center;
color: #121212;
font-family: helvetica;

}
.value {
   color: #052962;;
   
}
.footWorkBox, .ballWorkBox {
    margin-right: 20px;
 
    padding: 0.7px;
}

 li {
   list-style-type: none;
   font-family: helvetica;
   padding: 1px;
   
}
ul {
    display: flex;
    
    flex-flow: column wrap;
}

`}

</style>
    </>
}

export default gems