


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
       color: #fff;
       margin-top: 1rem;
       font-weight: 700;
       letter-spacing: 0.2px;
       transition: color 0.6s ease;
       font-family: nyt-cheltenham;
       -webkit-font-smoothing: antialiased;
     
       vertical-align: baseline
        
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
    
    
   