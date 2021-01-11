

const Hit = ({ hit }) => {
    return <>
 
    <a href={hit.link} >
        <div  className="card">

            <div className="card-image">
               
            
            <img loading="lazy" alt={hit.player} width="100px" height="100px" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img>
 
            </div>

 <div   className="cardContent">
 <h3  className="">{hit.player}<br/>{hit.team}<br/>{hit.hoopcode}</h3>

 </div>
 
</div>
</a>
 
    <style jsx>
      {`
      .card-image{
          text-align: center;
      }
.cardContent {
    max-width: 196px;
    margin: 0 auto;
    position: relative;
    text-align: center;
}
      
          h3 {
            font-weight: 600;
            font-size: 1.1666em;
            line-height: 1.2307em;
            margin: 15px 0 10px;
          }
   
      .card {
         display: flex;
         flex-flow: row wrap;
      
     
      }
      a:visited{
        color: black;
    }
      
 
      
      
      `}  
    </style>
    </>
};


export default Hit