import React from "react";
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
 
export default function Buttonup() {
   
        return <>
            <div>
                <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{}}
                ToggledStyle={{}} />
 
            </div> 
        <style jsx>
            {`
            .ScrollUpButton__Container{
               color: red;
            }
            
            `}
        </style>
        </>
    }
 
 