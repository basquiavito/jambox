import Kicker from './kicker'
import { Label } from 'semantic-ui-react';
import Link from 'next/link'


const kickerhub = () => {
    return <>
<div id="kicker">

 <a href="https://hoopscript.com/article?_id=5ffa9cccfeaebf363eaf659d">
    <div id="MainKicker">
<Kicker 
 label="What's Hot?"
 title="Lamelo Ball First Triple-Double At Age 19"
 dekk="At 19 years, 140 days old, Ball put up 22 points, 12 rebounds and 11 assists as the Hornets improved to 5-5 with a 113-105 victory over the Hawks at Spectrum Center in Charlotte."
 dekk1="Averaging 11.7 points, 7.0 rebounds, 5.9 assists and 1.5 steals per game while coming off the bench for 25.3 minutes per game. Impressive, isn't it?"
mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg"
figcaption="Lamelo drives to the hoop in a during a matchup against the Raptors."
photographer="Manuel Torres for Hoopscript"
author="Richard Clemons"
date="Jan 17, 2021"
/>

</div>
    </a> 

<br/><br/>
 
   <a href="https://hoopscript.com/article?_id=6004d285930ead60f5db9ea0">
<div className="secondKicker">
    
    <Kicker 
     label="Debut"
     title="James Harden is the first player in NBA history with a 30-point triple-double in their debut with a team."
     dekk="Harden had 32 points, 14 assists and 12 rebounds in the Nets' 122-115 win over the Orlando Magic."
     dekk1='I hope that you can tell by my smile and my play," Harden said. "Just excited, excited for the opportunity. This is an unbelievable organization from top to bottom. For me, all I have to do is go out there and be the best James Harden I can be and good things will happen.'
    mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610927063/harden_nets_mnur60.jpg" 
    figcaption="Harden debut with Nets"
    photographer="Ortelo Navas for Hoopscript"
    author="Justin Telfair"
    date="Jan 17, 2021"
    
    />
    
    
    </div></a>
    
   
<br/>

 <a href="https://hoopscript.com/article?_id=5ffa9e2bfeaebf363eaf659e">
<div 
className="thirdKicker">

<Kicker
 label="Vintage"
 title="Stephen Curry Answers His Critics With a 62-Point Game"
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755507/curry_hxbmt3.jpg"
 dekk="A career-best performance against Portland reminded the league what the Golden State Warriors guard can do."
 dekk1='“Cue the Jordan meme: ‘I take all that personally,’” Curry said with a laugh, referring to a line by Michael Jordan in the documentary “The Last Dance.”'
 figcaption="Stephen Curry’s incredible night led to a win for the Golden State Warriors"
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