


export default function mainTitle(props){
    return<>
   <div className="editorialTitle">
   <h2 >{props.title}</h2>
   </div>
   
   <style jsx>{`
   .editorialTitle{
    margin-top: 1rem;
    font-size: 1.5rem;

 
    
                  }
    
    
   .editorialTitle h2{
       display: inline;
       font-weight: 400;
                     }
               `}</style>
          
       </>
   }