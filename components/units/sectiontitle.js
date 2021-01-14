import React from 'react'

function Sectiontitle(props){
 
return(
    <>
<div className="sectionTitleContainer">
<h2 className="sectionTitle">
  {props.title}
</h2></div>
<style jsx>{`
.sectionTitleContainer{
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-column: grid-start / grid-end; 
   
 
 
}
.sectionTitle{
    color: #fff;
    font-size: 2.75rem;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    letter-spacing: 2px;
    grid-column: grid-start / grid-end;
    margin-bottom: 8px;
}








`}</style>
      </>
    )
}
export default Sectiontitle