import Link from 'next/link'

export default function articleLink(props){
    return <>
<section className="sectionContainer">
<div className="detailsRubric"><span> Scores</span></div>
<Link href=""><a><h2 className="sectionTitle">{props.title}</h2>
<p className="sectionContent">{props.dekk}<br/></p>
<p id="author">{props.author} | <time datetime="2020-07-31">{props.date}</time></p> 
 <picture className="styleReponsive">  

 
  <img width="320px" src={`https://img.youtube.com/vi/${props.mediaId}/hqdefault.jpg`} alt="Clippers vs Lakers full game highlights"/>
 <figcaption>
     
     
     <small><em>{props.score}</em></small></figcaption></picture></a></Link>

 </section><hr/>
<style jsx>
    {`
.sectionContent{
    line-height: 1.56em;
    letter-spacing: normal;
    font-family: GTAmerica,helvetica,sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
    color: #333;
    
}
    .detailsRubric{
        font-family: "A2 Regular", sans-serif;
        font-stretch: normal;
        font-style: normal;
        font-weight: 600;
        background-color: #ff3c36;
        display: table;
        font-size: 12px;
        letter-spacing: 0.5px;
        line-height: 1;
        min-height: 30px;
        padding: 10px 30px 10px 10px;
        transition: background-color 0.2s ease-in;
 
  
        width: max-content;
  
        margin-bottom: 1px;
        color: #fff;
        text-decoration: none;
     
    }

   figure{
     margin: 0;
   }
   .sectionTitle{
    font-family: "Titling Gothic Narrow Medium", sans-serif;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    box-shadow: 10px 0 0 rgba(0, 0, 0, 0.8), -10px 0 0 rgba(0, 0, 0, 0.8);
    display: inline;
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 28px;
    line-height: 38px;
    margin: 0;
}
   
    section {
        bottom: 0;
        left: 0;
        padding: 0 20px 20px;
 
        right: 0;
        background-image:url(${props.mediaId});
    }
    *, *::before, *::after, html {
        box-sizing: border-box;
    }
  a {
      text-decoration:none;
      color: inherit;
  }

 
    `}
</style>


    </>
}