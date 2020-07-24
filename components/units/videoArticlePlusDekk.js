import Link from 'next/link'


export default function VideoArticlePlusDekk(){
    return<>
 
 <h1 className="videoTitle" 
 data-title="PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020">
     <small>Title :</small>  Iverson Crossed Jordan. <br/> <small>Hoopcode </small> : 013 013 180 <br/> <small> Name : Double Picasso + base</small> <br/><small>Rank :</small> Masterpiece<br/> </h1>

<p class="videoDescription">
    The triad <Link href=""><a>Picasso</a></Link>  is a masterpiece crafted by <Link href=""><a>Allen Iverson</a></Link><br/> in a 1997 game against <Link href=""><a>Michael Jordan.</a></Link><br/>
  Picasso has a double <Link href=""><a>0 1 3  </a></Link>.
 
    Usually shorts steps precede the forward steps <Link href=""><a>( F )</a></Link> .  <br/>
The raw code should be <Link href=""><a>0F13 0F13 F180 FG$</a></Link>.<br/>

    </p>
 

    
    
     


    
    
    
    
    
<style jsx>
{`
h1 {
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

`}



</style>
    </>
}