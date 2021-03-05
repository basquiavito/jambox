const prototypeB = (props) => {
    return <>
<div id="prototypeText">
    <p>
        {props.prototypeText}
    </p>
 <p>{props.children}</p>

   
</div>
<style jsx>
    {`
     margin-left: 10px;
      
  
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
    
    
    `}
</style>
    </>
}

export default prototypeB