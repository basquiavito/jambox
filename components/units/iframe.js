import Sectiontitle from '../../components/units/sectiontitle'
import Title from '../../components/units/title'
const iframe = (props) => {
    return <>
     <Sectiontitle  title={props.hoopcode}/>

     <div className="stringContainer">
     <p id="strings">{props.string}</p>
     </div>
     <hr/>
<Title title={props.title} />
<iframe
 
            title="Youtube"
            controls="true"
            aria-hidden="true"
            className="youtubeContainer"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            width="100%"
            height="315px"
          
         
 
 
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
            <a href=https://www.youtube.com/embed/${props.value}/?autoplay=1>
            <img src=https://img.youtube.com/vi/${props.value}/hqdefault.jpg alt=${props.title} ></a>`}
          ></iframe>


 


          <style jsx>
              {`
             .stringContainer {
              display: block;
              text-align: center;
              text-transform: Capitalize;
    font-family: SangBleuRepublic, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 500;
    color: rgb(228, 18, 36);
}
 
   
              #strings {
               
    vertical-align: middle;
    text-decoration: none;
    color: rgb(228, 18, 36);
    text-align: center;
              }
              hr {
                clear: both;
                margin: 1rem 0;
   
              
                text-align: center;
              }
              
              `}
          </style>
    </>
}

export default iframe
 