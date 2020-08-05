 
 
function dekk(props){
return(
<div className="editorialDekk">
<p><em>{props.dekk}</em> </p>
<style jsx>
{`.editorialDekk{
    margin-top: 0.5rem;
   margin-bottom: 0.5rem;
   line-height: 1.56em;
    letter-spacing: normal;
    font-family: GTAmerica,helvetica,sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
    color:#000 ;
    font-family: "Roboto",sans-serif;
    font-size: 18px;
    text-align: left;
    
    }
p > em {
    line-height: 1.6;
    text-rendering: optimizeLegibility;  
}

    `}</style>
 
        </div>
    )
}
 
export default dekk
