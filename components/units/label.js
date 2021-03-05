const Label = (props) => {
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
    border-bottom: 0.15rem solid rgb(0, 0, 0);
    flex: 1 1 0%;
   
    

 }
.textLabel88{
    font-size: 0.75rem;
    font-weight: 400;
    line-Height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(0, 0, 0);
  
 
}
 
 
`}
 
</style>
 
 
</div>
        
    )
}
export default Label
