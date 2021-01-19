import Kicker from './kicker'
import { Label } from 'semantic-ui-react';
import Link from 'next/link'


const kickerhub = () => {
    return <>
<div id="kicker">

 <a href="https://hoopscript.com/article?_id=6006c4342ba6762fdeae3b45">
    <div id="MainKicker">
<Kicker 
 label="What's Hot?"
 title="Kevin Durant & James Harden se combinan para 64 puntos🔥 "
 dekk="Noche Caliente"
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611056633/kd_harden_kqu3tu.png"
figcaption="James Harden & Kevin Durant sobresaltan sobre Giannis."
photographer="Manuel Torres for Hoopscript"
author="Richard Clemons"
date="Jan 18, 2021"
/>

</div>
    </a> 

<br/><br/>
 
   <a href="https://hoopscript.com/article?_id=6006c8b02ba6762fdeae3b46">
<div className="secondKicker">
    
    <Kicker 
     label="Debut"
     title="Victor Oladipo Debuta con los Rockets"
     dekk="Victor Oladipo debuto con los Rockets and termino con 32 PTS, 5 REB, 9 AST & 2 STL"
     mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611057194/Oladipo_Debut_mmg1aw.png" 
    figcaption="Victor Oladipo "
    photographer="Ortelo Navas for Hoopscript"
    author="Justin Telfair"
    date="Jan 18, 2021"
    
    />
    
    
    </div></a>
    
   
<br/>

 <a href="https://hoopscript.com/article?_id=5ffa9e2bfeaebf363eaf659e">
<div 
className="thirdKicker">

<Kicker
 label="Vintage"
 title="Stephen Curry responde las criticas con excepcional juego de 62 puntos"
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755507/curry_hxbmt3.jpg"
 dekk="La mayor cantidad d puntos de su carrera recordandole a la liga lo que el todavia puede hacer."
  figcaption="Stephen Curry lidero los Warriors a la victoria "
photographer="NBA for youtube"
author="Jason Marquez"
date="Jan 17, 2021"
 />
</div>
</a>

</div>
<style jsx>
    {`
    text-decoration: none;
    color: black;
    
    
    
    `}
</style>
    </>
}

export default kickerhub