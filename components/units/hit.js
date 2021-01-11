

const Hit = ({ hit }) => {
    return <>


    <a href={hit.link} >
        <div  className="card">

            <div className="card-image">
               
            
            <img loading="lazy" alt={hit.player} width="100px" height="100px" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img>
 
            </div>

 <div   className="cardContent">
 <p  className="">{hit.player}<br/>{hit.team}<br/>{hit.hoopcode}</p>

 </div>
 
</div>
</a>
 
    <style jsx>
      {`
      .card {
          display: flex;
          flex-flow: column wrap;
      
     
      }
      a:visited{
        color: black;
    }
      
 
     
      
      
      `}  
    </style>
    </>
};


export default Hit