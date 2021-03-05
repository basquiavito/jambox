import Joyas from './joyas'


const gems = () => {
    return <>
<div className="container">
  
 <Joyas
 digit="0"
 digit1="1"
 digit2="2"
 digit3="3"
 /> 
 <Joyas
 digit="4"
 digit1="5"
 digit2="9"
 digit3="N"
 />
 
 <Joyas
 digit="6"
 digit1="7"
 digit2="8"
 digit3="F"
 />

<Joyas
 digit="P"
 digit1="H"
 digit2="C"
 digit3="S"
 />


<Joyas
 digit="G"
 digit1="$"
 
 />
</div>

<style jsx>
    {`
    .ballwork {
        display: inline-flex;
        justify-content: center;
        flex-flow: column wrap;
        width: 100%;
        height: 300px;
        background: #eee;
        margin-top: 4.5rem;
    }
    
    
    `}
</style>
    </>
}


export default gems