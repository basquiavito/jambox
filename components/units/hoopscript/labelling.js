const labelling = (props) => {
    return <>
<div className="labelContainer">
<p className="name">{props.name}</p> 
<p className="code">{props.notation}</p> 
<p className="label"> {props.label}</p> 

</div>

<style jsx>
    {`


    
.labelContainer {
     
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #fff;
}


  .name, .code{
    margin-right: 10px;
 
    
  }  
    
    `}
</style>
    </>
}


export default labelling