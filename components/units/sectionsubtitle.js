import React from 'react'

function Sectionsubitle(props){
    return(
<div className="sectionsubTitleContainer">
<h2 className="sectionsubTitle">
  {props.subtitle}
</h2>
<style jsx>{`
.sectionsubTitleContainer{
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    grid-column: center-start / center-end;
}
.sectionsubTitle{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
   color: #d00;

   padding-top: 15px
   
}


.sectionsubTitleContainer{
    line-height: 1.45;
}





`}</style>
        </div>
    )
}
export default Sectionsubitle