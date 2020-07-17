
import React from 'react'



function title(props){
 return(
<div className="editorialTitle">
<h2 >{props.title}</h2>


<style jsx>{`
.editorialTitle{
    font-size: 2.25rem;
 
 
               }
 
 
.editorialTitle h2{
    display: inline;
                  }
            `}</style>
        </div>
    )
}
 
export default title
