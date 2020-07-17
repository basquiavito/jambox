 import React  from 'react'



 
function Obb(props){
    return(
        <div>



 <div id="box">
 

 
<table className="table">

<tbody>
 <tr>
<td><span className="headers">D</span></td>

<td className="headers">1</td>
<td className="headers">2</td>
<td className="headers">3</td>
<td className="headers">4</td>
<td className="headers">5</td>
<td className="headers">6</td>
<td className="headers">7</td>
<td className="headers">8</td>
<td className="headers">9</td>
<td className="headers">10</td>
<td className="headers">11</td>
<td className="headers">12</td>
 </tr> 

<tr >
<td>F</td>

<td>{props.f1}</td>
<td>{props.f2}</td>
<td>{props.f3}</td>
<td>{props.f4}</td>
<td>{props.f5}</td>
<td>{props.f6}</td>
<td>{props.f7}</td>
<td>{props.f8}</td>
<td>{props.f9}</td>
<td>{props.f10}</td>
<td>{props.f11}</td>
<td>{props.f12}</td>
 
 


</tr>
 <tr>
 <td>B</td> 

 <td >{props.b1}</td> 
 <td >{props.b2}</td> 
 <td>{props.b3}</td>
<td>{props.b4}</td>
<td>{props.b5}</td>
<td>{props.b6}</td>
<td>{props.b7}</td>
<td>{props.b8}</td>
<td>{props.b9}</td>
<td>{props.b10}</td>
<td>{props.b11}</td>
<td>{props.b12}</td>
 
 
 
 
 </tr>

     
 <tr>
 <td>S</td> 

<td>{props.s1}</td> 
<td>{props.s2}</td> 
<td>{props.s3}</td>
<td>{props.s4}</td>
<td>{props.s5}</td>
<td>{props.s6}</td>
<td>{props.s7}</td>
<td>{props.s8}</td>
<td>{props.s9}</td>
<td>{props.s10}</td>
<td>{props.s11}</td>
<td>{props.s12}</td>



</tr></tbody></table>

</div> 
 <style jsx>
     {
   `
   table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 30px;
    background-color: #F1EC7A;
  
  }

  th { 
    background: #333; 
    color: white; 
    font-weight: bold; 
  }

  .headers {
color: #1D4D9F;
font-weight: bold;
  }
  td, th { 
    padding: 6px; 
    border: 1px solid #ccc; 
    text-align: left; 
    font-wight: bold;
  } 
   



`     }
 </style>
    </div>
    )
}

 

export default Obb