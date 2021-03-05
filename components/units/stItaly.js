import React from 'react'

function sTItaly(props){
 
return(
    <>
<div className="sectionTitleContainer">
<h2 className="sectionTitle">
 <span>{props.title}</span> 
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
    grid-column: grid-start / grid-end;
    color: #fff;
    font-size: 2.75rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.47059;
    text-align: center;
    letter-spacing: -.022em;
    font-style: normal;
    


}

span {
    border-bottom: 5px solid #fff;
}






`}</style>
      </>
    )
}
export default sTItaly