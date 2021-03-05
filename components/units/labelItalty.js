const Labelitaly = (props) => {
    return(
   
<div className="label88">
<span className="textLabel88">{props.label}</span>
<style jsx>{`
.label88{
    display: flex;
    margin-bottom: 0.4rem;
  
   
}
 .label88::after{
    content: "";
    margin-left: 0.5rem;
    position: relative;
    top: calc(-0.375rem);
    

    flex: 1 1 0%;
   
    

 }
.textLabel88{
    font-size: 0.75rem;
    font-weight: 400;
    line-Height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: Roboto Condensed,sans-serif;
    font-size: .9375rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    display: inline-block;
    
  
 
}
 
 
`}
 
</style>
 
 
</div>
        
    )
}
export default Labelitaly
