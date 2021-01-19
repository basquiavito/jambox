import Kicker from './kicker'
import Kicker2 from './kicker2'
import { Label } from 'semantic-ui-react';
import Link from 'next/link'


const kickerhub = () => {
    return <>
<div id="kicker">
    <div className="pageGridMobile">

   
<div className="pageGridCenter">
<div className="editorialContainer">

 <a className="editorialLink" href="https://hoopscript.com/article?_id=6006c4342ba6762fdeae3b45">
    <div id="MainKicker">
<Kicker 
 label="News"
 title='Kevin Durant & James Harden se combinan para "64 puntos"' 
 dekk='Harden & Durant combinados para 64 puntos.'
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
    
    <Kicker2 
     label="Debut"
     title="Victor Oladipo Debuta con los Rockets"
     dekk="Victor Oladipo debuto con los Rockets and termino  32 PTS, 5 REB, 9 AST & 2 STL"
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

<Kicker2
 label="Vintage"
 title="Stephen Curry Answers His Critics With a 62-Point Game"
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755507/curry_hxbmt3.jpg"
 dekk="A career-best performance against Portland reminded the league what the Golden State Warriors guard can do."
  figcaption="Stephen Curry’s incredible night led to a win for the Golden State Warriors"
photographer="NBA for youtube"
author="Jason Marquez"
date="Jan 17, 2021"
 />
</div>
</a>
</div>
</div>
</div>
</div>
<style jsx>
    {`
    a {
        text-decoration: none;
        color: black;
    }
  
    
    .editorialLink {
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: inherit; 
    }
    .editorialContainer {
        color: rgb(0, 0, 0);
        font-weight: 100;
        line-height: 1.125;
        height: 100%;
        min-height: inherit;   
    }

.pageGridCenter {
    grid-column: center-start / center-end;
}
 

#kicker {
    background-color: rgb(255, 255, 255);
    padding: 2.25rem 0px 0px; 
}
    `}
</style>
    </>
}

export default kickerhub