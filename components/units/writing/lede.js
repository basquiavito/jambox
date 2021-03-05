

const lede = (props) => {
    const color = {
        color:props.color
    }
    return <>
 
 <p className="LedeContainer">
<span className="firstLetter">
<span style={color} className="letterDirect">{props.firstLetter}</span></span>
<span className="ledeDetails">{props.lede}</span>
</p> 

 <p>{props.children}</p>

 
<style jsx>
    {`


.letterDirect {
    font-family: GH Guardian Headline,Guardian Egyptian Web,Georgia,serif;
    font-size: 118px;
    line-height: 99px;
    vertical-align: text-top;
    pointer-events: none;
    margin-right: 4px;
    font-weight: 700;
 
}
.LedeContainer {
    margin-bottom: 16px;
    font-family: GuardianTextEgyptian,Guardian Text Egyptian Web,Georgia,serif;
    font-size: 1.0625rem;
    line-height: 1.5;
    font-weight: 400;
  
 
 
    font: inherit;
    vertical-align: baseline;
}
.firstLetter {
    font-family: GH Guardian Headline,Guardian Egyptian Web,Georgia,serif;
    font-size: 2.625rem;
    line-height: 1.15;
    font-weight: 300;
    float: left;
    text-transform: uppercase;
    box-sizing: border-box;
    margin-right: 4px;
   
}
    p {
        margin-left: 20px;
        margin-right: 20px;
     
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    max-width: 1600px;
    --type-token-name: consumptionEditorial.body-core;
    line-height: 25px;
    letter-spacing: normal;
    font-family: Georgia,helvetica,sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    text-transform: none;
    padding: 0;
    color: #333333;
    }
    
    .ledeDetails{
        margin-bottom: 16px;
        font-family: GuardianTextEgyptian,Guardian Text Egyptian Web,Georgia,serif;
        font-size: 1.0625rem;
        line-height: 1.5;
        vertical-align: baseline;
        font-weight: 400
    }
    
    `}
</style>
    </>
}

export default lede