export default function Sectionsubitle(props){
    return(
<div className="sectionsubTitleContainer">
<h2 className="sectionsubTitle">
  {props.subtitle}
</h2>
<style jsx>{`
.sectionsubTitleContainer{
  
 
    text-align: center;
    grid-column: center-start / center-end;
}
.sectionsubTitle{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
   color: #00788C;
   margin: 0;
 
 

 
   
}


 





`}</style>
        </div>
    )
}
 