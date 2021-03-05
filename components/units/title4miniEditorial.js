


export default function title4miniEditorial(props){
    return<>
   <div className="editorialTitle">
   <h2 className='headerRow'>
    {props.title}</h2>
   </div>
   
   <style jsx>{`
    
   
   
    .editorialTitle {
       margin-top: 1rem;
       font-size: 1.25rem;
       color: #fff;
       text-transform: capitalize;
      
        
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
    
    
   