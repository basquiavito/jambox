export default function gems(){
    return <>
<div id="gemsContainer">
 <strong>Ballwork</strong>
 <ul>
     <li><span>0</span> <span>bounce</span></li>
     <li><span>1</span> <span>crosover</span></li>
     <li><span>2</span> <span>behind</span></li>
     <li><span>3</span> <span>between</span></li>
     <li><span>4</span> <span>reverse</span></li>
     <li><span>5</span> <span>iao</span></li>
     <li><span>9</span> <span>shammgod</span></li>
 
 </ul>
<strong>Footwork</strong>
 <ul>

     <li><span>6</span> <span>step back</span></li>
     <li><span>7</span> <span>spin</span></li>
     <li><span>8</span> <span>first step</span></li>
     <li><span>F</span> <span>step forward</span></li>
     <li><span>P</span> <span>post up</span></li>
     <li><span>H</span> <span>hesi</span></li>
     <li><span>CH</span> <span>chasse</span></li>
 </ul>

 <strong>Shooting</strong>
 <ul>
<li><span>G</span> <span>grab</span></li>
<li><span>$</span> <span>Shooting</span></li>
</ul>


<strong>Shot Type</strong>
 <ul>
 <li><span>JU</span> <span>Dunk</span></li>
<li><span>SB</span> <span>Step Back</span></li>
<li><span>TA</span> <span>Turnaround</span></li>
<li><span>FA</span> <span>Fadeaway</span></li>
<li><span>TAFA</span> <span>Turnaround Fadeaway</span></li>
<li><span>PU</span> <span>Pullup</span></li>
<li><span>LU</span> <span>Layup</span></li>
<li><span>DU</span> <span>Dunk</span></li>
</ul>

<strong>Dribbles</strong>
 <ul> 
 <li><span>0</span> <span>dribbles</span></li>
<li><span>1</span> <span>dribbles</span></li>
<li><span>2</span> <span>dribbles</span></li>
<li><span>3-6</span> <span>dribbles</span></li>
<li><span>7+</span> <span>dribbles</span></li>
</ul>







</div>
<style jsx>
    {`

#gemsContainer {
display: flex;
flex-direction: column;
justify-content: center;
margin: 2.25rem;
}
ul {
        display: flex;
        flex-flow:column;
        justify-content: center;
   
    }
    
   
    
    
    `}
</style>
    </>
}