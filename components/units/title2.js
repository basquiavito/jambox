
 



export default function title2(props){
    return<>
   <div className="editorialTitle">
   <h3 >
    {props.title}</h3>
   </div>
   
   <style jsx>{`
    h3   {
    font-size: 100%;
    font-weight: inherit;
}
   .editorialTitle h3 {
    display: inline;
   }
   
    .editorialTitle {
    
        margin-top: 0.75rem;
    font-size: 1.313rem;
    margin-bottom: 1rem;
    }
          .editorialTitle   {
           margin-top: 0.5rem;
       
          }  
          
          h2 {
           font-size: 100%;
           font-weight: inherit;
          }
               `}</style>
          
       </>
   }
    
    
   