
 

const name = (props) => {
    const color = {
        color:props.color
    }
    return <>
<div className="nameContainer">
<a style={color} href="" className="nameLink">
<span> {props.name}</span>

</a>
</div>
<style jsx>
  {`

  .nameLink {
    background-color: transparent;
    font-weight: 700;
    font-family: GH Guardian Headline,Guardian Egyptian Web,Georgia,serif;
    font-size: 1.0625rem;
    line-height: 1.15;
    text-decoration: none;
 
  
  }
  .nameContainer {
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 3rem;
  }
  
  
  `}  
</style>

    </>
}

export default name