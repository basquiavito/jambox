 
 
function dekk(props){
return(
<div className="editorialDekk">
    <ul className="dekkContainer">
        <li>{props.dekk} </li>
        <li>{props.dekk1} </li>
    </ul>  
 
<style jsx>
{`
.dekkContainer li:first-child {
    margin: 0;
}
.dekkContainer li {
    position: relative;
    font-size: 1rem;
    letter-spacing: normal;
    line-height: 1.375rem;
    text-size-adjust: 100%;
    font: inherit;
    vertical-align: baseline;
    padding: 0;
    border: 0;
    margin: 6px 0 0 0;
}
.dekkContainer {
    letter-spacing: normal;
    line-height: 1.375rem;
    margin-bottom: 8px;
    list-style: none;
    position: relative;
    color: #555;
    font-family: nyt-imperial;
    font-size: 1.1rem;
    padding: 0;
    transition: color 0.6s ease;
}
.dekkContainer li::before {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    left: -8px;
    top: 8px;
    content: '';
    display: block;
    background: #666;
    position: absolute;
}
.editorialDekk{
 
 
   line-height: 1.56em;
    letter-spacing: normal;
    font-family: GTAmerica,helvetica,sans-serif;
    font-size: 18px;
    font-weight: 500;
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
