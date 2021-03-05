import Card from './card'
 
export default function cardfeatured(){
    return <>
    <div className="sectionTitle">
            <div className="innerText">
            <h3><span>Recientes</span> Articulos</h3>
            </div>
        </div>
    <div id="homeContent">
        
<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />

<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />


<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />


<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />


<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />


<Card 
color="rgb(255 255 100)"
label="Le 100 facce creative di Marco Oggian" />



</div>




<style jsx>
 {`
 #homeContent {
   
 
     max-width: 38rem;
     padding: 1.5rem;
     margin: auto;

 }
 
 .sectionTitle {
    margin-bottom: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #dddddd;
    border-color: #dddddd;
    animation-duration: .2s;
    animation-timing-function: linear;
    text-align: center;
}
 .innerText {
    padding-bottom: 0;
    position: relative
 }
 .innerText h3  {
    text-transform: uppercase;
    font-family: 'Noto Sans',Helvetica,Arial,Lucida,sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    
    text-decoration: none;
    line-height: 1.2em;
    padding-bottom: 10px;
 }
 span {
    color: #e2007b;
 }
 `}   
</style>
    </>

}