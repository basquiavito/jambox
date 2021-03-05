import React, {Component} from 'react'
import Coderow from '../../components/units/coderow'
export default class test extends Component{
    state={
        score : [
            {shottypes:['layup', 'dunk', 'jump shot']}
        ],

     
    }



    render(){
        return<>
<div id="um"> 
<div className="ok">
<p>{this.state.score[0].shottypes[0]}</p>
</div>

<div className="ok">
<p>{this.state.score[0].shottypes[1]}</p>
</div>

<div className="ok">
<p>{this.state.score[0].shottypes[2]}</p>
</div>






</div>



<div>
<Coderow rank="1" codeTitle="Harden" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755951/harden_atkfyy.jpg" hoopcodes="Package of 8 nice 181's." details="A beatiful collection of crossovers signatures moves combos used." />
<Coderow rank="2" codeTitle="Kobe" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611069149/konerookie_kbqplj.jpg" hoopcodes="Package of 5 Louisiana" details=" A vintage view to Kobe postup gamestyle."/>
<Coderow rank="3" codeTitle="Tatum" image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755872/tatum4_jdsaee.jpg" hoopcodes="Game Winner Tutuma" details="Tatum hits a game winner with a sick combo. (535) inandout with both hands. " />
    
</div>
<style jsx>
    {`
    #um {
        text-align: center;
        display: inline-flex;
        border: 2px solid black;
        margin-left: 40%;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 1rem;
        justify-content: center;
        align-content: center;
    }

    .ok {
        padding: 10px;
        border-right: 2px solid black;
    }
    
    
    `}
</style>
        </>
    }
}