


export default function mainTitle(props){
    return<>
   <div className="editorialTitle">
   <h2 >{props.title}</h2>
   </div>
   
   <style jsx>{`
   .editorialTitle{
    margin-top: 1rem;
     font-family: san-serif;
       font-size: 2.25rem;
 
    
                  }
    
    
   .editorialTitle h2{
       display: inline;
                     }
               `}</style>
          
       </>
   }