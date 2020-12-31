

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
  margin-bottom: 1.5rem;
    margin-top: 10px;
    box-sizing: border-box;
    font-family: tiempos,Serif!important;  
   }   
   
   .headerRow {
    box-sizing: border-box;
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 500;
    line-height: 34px;
    padding-bottom: 10px;
    font-style: normal;
   
}

h1{
    margin-top: 20px;
    margin-bottom: 10px;
}
       
        
   
   
   
    `}</style>
          
       </>
   }
    
    
   