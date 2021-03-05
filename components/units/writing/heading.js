const heading = (props) => {
    const color = {
        color:props.color
    }
    return <>
<div className="titleContainer">
  <h1 className="title">
  <span>{props.title}</span> <span style={color} className="headColor">{props.head}</span>
      </h1>  
</div>

<style jsx>
 {`
 
 .titleContainer {

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    text-size-adjust: 100%;
 
    vertical-align: baseline;

 }
 .title {
   
    margin-bottom: 1rem;
    margin-left: 20px;
    margin-right: 20px;
  
    max-width: 600px;
    margin-top: 0;  
    color: #121212;
    font-family: nyt-cheltenham,georgia,'times new roman',times,serif;
    font-weight: 300;
    font-style: italic;
    font-size: 1.9375rem;
    line-height: 2.25rem;
    text-align: left;
 }
 
 
 `}   
</style>
    </>
}

export default heading