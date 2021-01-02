const spotlight = (props) => {
    return <>
    <div id="spotlight">
<div className="spotlightWrapper">
<div className="spotlightContent">
<table className="spotlightTable">
<tbody>
<tr>
<td className="spotlightTableContent">
<a href="" className="spotlightName">{props.title}</a>
<p className="spotlightMetadata">
<span className="spotlightYear">2021</span>
<span className="spotlightMaturity">Reg Season</span>
<span className="spotlightDuration">4 minutes</span>
</p>
<p className="spotlightDescription">Decades after the tournament that changed their lives.</p>

<div className="spotlightActions">
<a href="" className="spotlightWatch">
    PLAY
</a>
</div>
</td>
    </tr>
</tbody>

</table>

<div className="spotlightBackground">
<div className={`${'spotlightGradient'} ${'backgroundFill'}`}></div>
<img className={`${'spotlightStill'} ${'spotlightFill'}`} src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`} alt={props.title} alt="">

</img>
</div>
</div>
</div>
</div>



<style jsx>
{`

.spotlightFill {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;  
}
.backgroundFill {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
}
.spotlightGradient {
    background-image: url(https://hooperos.s3.us-east-2.amazonaws.com/tables/spotlight_gradient.png);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    z-index: 1;
}
.spotlightBackground {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 75%;  
}
.spotlightWatch {
    display: inline-block;
    position: relative;
    z-index: 2;
    background: #e50914;
    border: 1px solid #ff0a16;
    color: #fff;
    padding: .57em 1.35em;
    font-weight: 700;

}
.spotlightActions {
    top: .57em;   
}
@media screen and (max-width: 500px){
    .spotlightDescription {
    display: none;
}}
.spotlightDescription {
    margin: 0 0 1.5em 0;
    width: 33%;
 
    line-height: 1.4;  
    color: #fff;
    position: relative;
    z-index: 2;
}

.spotlightYear, .spotlightMaturity {
    margin-right: .8em;
}
span {
    color : #fff;
}
.spotlightMetadata {
    margin: 0 0 1em 0;
    font-weight: 700;
    position: relative;
    z-index: 2;
}
@media screen and (max-width: 500px){
#spotlight {
 
    font-size: .8em;
}}
#spotlight {
   
    width: 100%;
    overflow: hidden;
    background: #000;
    border-bottom: 1px solid #000;
    padding: 16px;
   
}
@media screen and (max-width: 500px){
.spotlightName {
    width: 66%;
}}
.spotlightName{
    margin: 0 0 .2em 0;
    color: #fff;
    font-size: 1.5em;
 
    text-decoration: none;
    display: block;
    position: relative;
    z-index: 2;

}


.spotlightTableContent {
    vertical-align: middle;

}
.spotlightTable {
    width: 100%;
    height: 100%;
}
.spotlightContent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

}
.spotlightWrapper {
    width: 100%;
    padding-top: 33%;
    position: relative;
}

 
    @media screen and (max-width: 500px){
    .spotlightWrapper {
        padding-left: 20px;
        padding-right: 20px;
    }}
`}    
</style>
    </>
}

export default spotlight