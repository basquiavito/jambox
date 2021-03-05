const joyas = (props) => {
    return <>
<div className="container">
<div  className="element">{props.digit}</div>
<div className="element">{props.digit1}</div>
<div  className="element">{props.digit2}</div>
<div   className="element">{props.digit3}</div>

</div>

<style jsx>
{`
#footwork {
    color: #ce1126;
}
#ballwork {
    color: #002d62;
}
.container {
    height: 75px;
    width: 100%;
    background: #fff;
    display:  flex;
    justify-content: center;
    padding: 10px;
}
 

.element  {
    margin-top: -3px;
    -webkit-font-smoothing: antialiased;
    padding: 10px;
    font-weight: 700;
    transition: color 0.6s ease 0s;
    color: rgb(18, 18, 18);
    font-size: 1.625rem;
    line-height: 1.75rem;
    letter-spacing: 0.1px;
    margin-bottom: 12px;

}
 


`}


</style>
    </>
}

export default joyas