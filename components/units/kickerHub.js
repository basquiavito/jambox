import Kicker from './kicker'
import { Label } from 'semantic-ui-react';



const kickerhub = () => {
    return <>
<div id="kicker">

<div id="MainKicker">
<Kicker 
 label="What's Hot?"
 title="Lamelo Ball First Triple-Double At Age 19"
mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755554/lamelo_mft4ov.jpg" />
</div>

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
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755507/curry_hxbmt3.jpg"/>
</div>

</div>

    </>
}

export default kickerhub