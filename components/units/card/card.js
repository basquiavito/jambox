import Square from './square'
import Label from './label'




const flex = {
    display:'flex',
    justifyContent: 'center',
    flexFlow:'row wrap'
}

const cardStyle = {
    overflow: 'hidden',
    height: 150,
    width: 180,
    padding: 0,
    backgroundColor: "#fff",
    boxShadow: '0px 0px 5px #666',
    minwidth: '100%',
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'bottom',
    border: '0 solid #333'
  

}


const card = (props) => {
    return <>
    <main style={flex}>
<div id="imageHoster" style={cardStyle}>
    <Square color={props.color}/>
    <Label label={props.label}/>
</div>
</main>
 

 <style jsx>
{
`
#imageHoster {
 margin-right: 5px;
 margin-top: 2rem;
 
 
 
 
 


}
main {
    display: flex;
   
}


`



}


 </style>
    </>
}

export default card