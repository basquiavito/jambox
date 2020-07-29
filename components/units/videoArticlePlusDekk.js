import Link from 'next/link'


export default function VideoArticlePlusDekk(props){
    return<>
 
 <h2 className="videoTitle" 
 data-title={props.title}>
     <small>Title :</small>  {props.title} <br/> 
     <small>Hoopcode </small> : {props.code}<br/>
      <small> Name : </small> {props.name}<br/>
      <small>Rank :</small> {props.rank}<br/> </h2>

<p class="videoDescription">
    
  {props.rawDescript}
 


    </p><br/>
 

    
    
     


    
    
    
    
    
<style jsx>
{`
h2 {
    font-size: 24px;
    line-height: 1.1;
    margin: 15px 0;
    color: #fff;
    font-family: 'Arial', sans-serif;
}
  p {
      grid-column: 1/-1;
    line-height: 1.69em;
    letter-spacing: normal;
    font-family: Georgia,helvetica,sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
    padding: 0;
    color: #;
    margin: 0 0 20px;
}
p > a {
    color : #489ec8;
}

p > a:visited {
    color : #489ec8;
}
small {
  color: #999;
}
`}



</style>
    </>
}