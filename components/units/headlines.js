


export default function headline(props){
    return <>
<div className="">
 <h1 className="title">{props.title}</h1>   
</div>


<style jsx>
 {`
 .title {
    font-size: 30px;
    line-height: 34px;
    padding-top: 0;  
    font-family: tiempos,Serif!important;
    font-style: normal;
    font-weight: 400;
    padding-bottom: 10px;
 }
 
 h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
 
 
 `}   
</style>
    </>
}