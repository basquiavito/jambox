

export default function title(props){
    return<>
   <div className="editorialTitle">
   <h1 className='headerRow'>{props.title}</h1>
   </div>
   
   <style jsx>{`
   .editorialTitle{
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
 
 
    box-sizing: border-box;
    font-family: tiempos,Serif!important;  
   }   
   
   .headerRow {
  
    text-transform: capitalize;
 
    font-weight: 500;
    line-height: 34px;
 
    font-style: normal;
   
}

 
       
        
   
   
   
    `}</style>
          
       </>
   }
    
    
   