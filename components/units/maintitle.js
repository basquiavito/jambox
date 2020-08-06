


export default function mainTitle(props){
    return<>
   <div className="editorialTitle">
   <h2 >{props.title}</h2>
   </div>
   
   <style jsx>{`
   .editorialTitle{
    margin-top: 1rem;
    font-size: 1.2em;
    text-align: left;

 
    
                  }
    
    
   .editorialTitle h2{
       display: inline;
 #00092D;
                     }

                     h2{
                        line-height: 1.2;
                        margin-top: 0;
                        margin-bottom: .5rem; 
                        font-style: normal;
    font-weight: normal;
 
    text-rendering: optimizeLegibility; 
                     }
               `}</style>
          
       </>
   }