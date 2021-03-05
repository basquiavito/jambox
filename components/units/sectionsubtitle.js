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
    margin-top: -43px;
    color: #0084C6;
}
.sectionsubTitle{
    font-size: 0.75rem;
    font-weight: 400;

    letter-spacing: 1px;
    text-transform: uppercase;
 
 
 
 

 
   
}


 





`}</style>
        </div>
    )
}
 