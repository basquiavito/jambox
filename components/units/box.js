import Labelling from '../units/hoopscript/labelling'
import Iframe from '../units/iframe'
import React, {useState}  from 'react'

function box(props) {
const [watch, setWatch] = useState({
media: [{value:props.value}]})



const changeValueHandler = () => {setWatch({media: [
{value: props.value}]})}
  
const changeValueHandler1 = () => {setWatch({media: [
{value: props.value1}]})}

const changeValueHandler2 = () => {setWatch({media: [
{value: 'k0oC1b45Ccw'}]})}

const changeValueHandler3 = () => {setWatch({media: [
    {value: 'Ns-qhiHwAJA'}]})}
const changeValueHandler4 = () => {setWatch({media: [
        {value: '8Vy6Iq923BI'}]})}
const changeValueHandler5 = () => {setWatch({media: [
            {value: 'I0zfXfdxi3U'}]})}
const changeValueHandler6 = () => {setWatch({media: [
                {value: 'NJbLcD618j8'}]})}
const changeValueHandler7 = () => {setWatch({media: [
                    {value: '-qd4FclVDME'}]})}
const changeValueHandler8 = () => {setWatch({media: [
                        {value: 'K-QJqGcQ3BY'}]})}
const changeValueHandler9 = () => {setWatch({media: [
                            {value: 'CBUS8lZCm5o'}]})}







    return <>
<div id="liContainer">
<div onClick={changeValueHandler}> 

<Labelling 
name={props.name}
notation={props.notation}
label={props.label}
/>
</div>


<div onClick={changeValueHandler1}> 
<Labelling 
name="Zion Williamson"
notation="28 pt t reb 6 ast"
label="12-14 fg"
/>
</div>


<div onClick={changeValueHandler2}> 
<Labelling 
name="John Collins"
notation="35 pt 12 rb 1 ast "
label="16-21 fg"
/>
</div>


<div onClick={changeValueHandler3}> 
<Labelling 
name=" Antetokoumpo"
notation="21 pt 14 rb 10 ast "
label="Triple Doble"
/>
</div>

<div onClick={changeValueHandler4}> 
<Labelling 
name="Joel Embiid"
notation="34 pt 11 rb 2 ast"
label=" 2 stl"
/>
</div>

<div onClick={changeValueHandler5}> 
<Labelling 
name="Luka Doncic"
notation="27 pt 8 rb 14 ast"
label="10-10 ft"
/>
</div>

<div onClick={changeValueHandler6}> 
<Labelling 
name="D. Sabonis"
notation="33 pt 12 rb 6 ast"
label=""
/>
</div>

<div onClick={changeValueHandler7}> 
<Labelling 
name="Demar Derozan"
notation="30 pt 8 rb 6 ast"
label="10-11 ft"
/>
</div>

<div onClick={changeValueHandler8}> 
<Labelling 
name="Lamelo Ball"
notation="22 pt 3 rb 7 ast"
label=" "
/>
</div>

<div onClick={changeValueHandler9}> 
<Labelling 
name="D. Fox"
notation="26 pt 1 rb 11 ast"
label="2 stl"
/>
</div>
</div>
<Iframe value={watch.media[0].value}/>
<style jsx>
    {`
   .name {
      margin-right: 10px;
    }
    #liContainer {
        height: 8rem;
        width: 100%;
        background:#ccc;
   overflow-y: scroll;
 color: rgb(18 18 18);
 
         
    }
    
    `}
</style>
    </>
}

export default box