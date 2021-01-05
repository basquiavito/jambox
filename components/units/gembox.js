
import ReactTooltip from 'react-tooltip'
import React, {useState} from 'react'
import Sectiontitle from './sectiontitle';
 
function gembox(){
    const [def, setDef] = useState({
       gembox:['Bounce: A bounce up and down of the ball without change of hands', 
       'Crossover: From one hand to the other passing through the front of the legs',
        'Behind the back: From one hand to the other passing behind the legs', 
        'Between the legs: From one hand to the other passing between the legs', 
        'Between the legs Reverse: From one hand to the other passing between the legs',
         'In and Out: Pseudo crossover. Pretend to do a cross, at midway return to base stance.', 
       'Step Back: Take an step back with the foot on the side of the ball', 
       'Spin: Spin around with the inside foot', 
       'First Step:','9', 'F', 'P', 'H', 'CH',  ] 
    })



    const switchSpanishHandler = ()=> {
        setDef({gembox:['Un dribleo simple. La bola baja y sube sin cambiar de mano.', 
        'Crossover: cruze de una mano a otra por delante de las piernas', 
        'Behind the back: From one hand to the other passing behind the legs',
        'Between the legs: From one hand to the other passing between the legs',
         '4', '5', 
        '6', '7', '8','9', 'F', 'P', 'H', 'CH',  ]

    })}

    const switchEnglishHandler = ()=> {
        setDef({gembox:['A simple bounce up and down of the ball without change of hands',
         'Crossover: From one hand to the other passing through the front of the legs', 
         'Behind the back: From one hand to the other passing behind the legs', 
         'Between the legs: From one hand to the other passing between the legs',
          '4', '5', 
        '6', '7', '8','9', 'F', 'P', 'H', 'CH',  ]

    })}
    return <>
<div id="buttons">
    <button  className="buttonStyle" onClick={switchSpanishHandler}>Español </button>
    <button  className="buttonStyle" onClick={switchEnglishHandler}>English </button>
 </div> <br/><br/>

<div  >
 <section id="content">
<div>
    <details>
        <p>{def.gembox[0]}</p>
        <summary>0</summary>
    </details>
</div>
 
<div>
    <details>
        <p>{def.gembox[1]}</p>
        <summary>1</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[2]}</p>
        <summary>2</summary>
    </details>
</div>
 

<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>3</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[4]}</p>
        <summary>4</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[5]}</p>
        <summary>5</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>6</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>7</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>8</summary>
    </details>
</div>

<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>9</summary>
    </details>
</div><br/><br/>

 


<div>
    <details>
        <p>{def.gembox[3]}</p>
        <summary>F</summary>
    </details>
</div>






</section>





</div> 
<style jsx>
    {`

summary {
    cursor: pointer;
}


#content > div {
    margin: 0 5px;
    padding: 5px 15px;
    border-radius: 3px 3px 0 0;
    background-color: #fff;
    text-decoration: none;
    color: #000;  
    
}

p:hover p:focus p:active  {
 
        background-color: #ffcc22;
        color: black;
      }

#content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    justify-content: center;
}
.pageGrid{

    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;}
    
    .gridCenter{
      grid-column: center-start / center-end;
   }


#buttons {
    text-align: center;
    background-color:transparent;
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
         text-align: center;
      }
      details {
        font: 16px "Open Sans", Calibri, sans-serif;
     text-align: center;
      }
      
      details > summary {
        padding: 2px 6px;
        width: 8em;
        background-color: #fff;
        border: none;
        box-shadow: 3px 3px 4px black;
        cursor: pointer;
        list-style: none;
      }
      
      details > summary::-webkit-details-marker {
        display: none;
      }
      
      details > p {
        border-radius: 0 0 10px 10px;
        background-color: #fff;
        padding: 2px 6px;
        margin: 0;
        box-shadow: 3px 3px 4px black;
      }
      
      
    
    
    
    `}
</style>
    </>
}

export default gembox