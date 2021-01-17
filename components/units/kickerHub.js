import Kicker from './kicker'
import { Label } from 'semantic-ui-react';



const kickerhub = () => {
    return <>
<div id="kicker">

<div id="MainKicker">
<Kicker 
 label="What's Hot?"
 title="Lamelo Ball First Triple-Double At Age 19"
 dekk="At 19 years, 140 days old, Ball put up 22 points, 12 rebounds and 11 assists as the Hornets improved to 5-5 with a 113-105 victory over the Hawks at Spectrum Center in Charlotte."
 dekk1="Averaging 11.7 points, 7.0 rebounds, 5.9 assists and 1.5 steals per game while coming off the bench for 25.3 minutes per game. Impressive, isn't it?"
mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755554/lamelo_mft4ov.jpg"
figcaption="Lamelo drives to the hoop in a during a matchup against the Raptors."
photographer="Basquiavito for Hoopscript"
author="Richard Clemons"
date="Jan 17, 2021"
/>

</div><br/><br/>

<div className="secondKicker">
    
<Kicker 
 label="Signature Move"
 title="Kevin Durant Drops 42 as Nets Beat Magic"
mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg" />

</div>

<div 
className="thirdKicker">

<Kicker
 label="Vintage"
 title="Steph Curry scores Career High 62 points"
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755507/curry_hxbmt3.jpg"
 
 />
</div>

</div>

    </>
}

export default kickerhub