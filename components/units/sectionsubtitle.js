export default function Sectionsubitle(props){
    return(
<div className="sectionsubTitleContainer">
<h3 className="sectionsubTitle">
  {props.subtitle}
</h3>
<style jsx>{`
.sectionsubTitleContainer{
  text-align: center;
    grid-column: center-start / center-end;
}
.sectionsubTitle{
    font-size: 0.75rem;
    font-weight: 400;

    letter-spacing: 1px;
    text-transform: uppercase;
   color: #abca59;
 
 
 

 
   
}


 





`}</style>
        </div>
    )
}
 