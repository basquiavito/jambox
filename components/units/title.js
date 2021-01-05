
 



export default function title(props){
 return<>
<div className="editorialTitle">
<h1 className='headerRow'>{props.title}</h1>
</div>

<style jsx>{`
.editorialTitle{
    font-size: 1rem;
    margin-top: 1 rem;
    margin-bottom: 0.5rem;
    letter-spacing: normal;
    font-family: GTAmerica,helvetica,sans-serif;
    font-size: 11px;
    font-weight: 700;
    font-style: normal;
    text-transform: none;
    line-height: 1;
 color: #000;
 text-align: center;
               }
 
 
.editorialTitle h1{
    display: inline;
                  }


.headerRow {
    line-height: 1.36em;
    letter-spacing: -.017em;
    font-family: GTAmerica,helvetica,sans-serif;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    text-transform: none;
    
    color: #000; 
}                  
            `}</style>
       
    </>
}
 
 
