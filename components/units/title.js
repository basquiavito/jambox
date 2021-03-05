
 



export default function title(props){
 return<>
<div className="editorialTitle">
<h2 className='headerRow'>
 {props.title}</h2>
</div>

<style jsx>{`
 


 .editorialTitle {
    margin-top: 1rem;
    font-size: 2.25rem;
   
     
 }
       .editorialTitle  h2 {
         display: inline;
     
    
       }  
       
       h1, h2, h3, h4, h5, h6 {
         font-size: 100%;
         font-weight: inherit;
         
     }
            `}</style>
       
    </>
}
 
 
