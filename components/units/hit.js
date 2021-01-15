import Image from 'next/image'

const Hit = ({ hit }) => {
    return <>
 
    <a href={hit.link} >
        <div  className="card">

        <div className="imageContainer" >
<picture className="">
<Image
src={hit.mediaUrl}
alt={`A photo of ${hit.player}`}
width="250px"
height="250px"
className="imagen"
/></picture></div>

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
      justify-content: center;
     
      }
      a:visited{
        color: black;
    }
      a {
        text-decoration: none;
      }
 
      
      
      `}  
    </style>
    </>
};


export default Hit