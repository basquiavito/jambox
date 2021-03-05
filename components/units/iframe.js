import Sectiontitle from '../../components/units/sectiontitle'
const iframe = (props) => {
    return <>
    <div id="iframe">
    <Sectiontitle  title={props.hoopcode}/> 
 
  <span id="strings">{props.string}</span>  

 
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
            height="auto"
            srcDoc={`<style>
            *{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:100%;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
            <a href=https://www.youtube.com/embed/${props.value}/?autoplay=1>
            <img src=https://img.youtube.com/vi/${props.value}/hqdefault.jpg alt=${props.title} ></a>`}
          ></iframe>
           <div className="title">
   <p>{props.title}</p>
 </div>


 

</div>
          <style jsx>
              {`

              .youtubeContainer{
                background: rgb(18 18 18);
              }
.titleDetail {
  color: #fff;
  font-family: nyt-cheltenham,georgia,'times new roman',times,serif;
  font-weight: 700;
  font-style: italic;
  font-size: 1.9375rem;
  line-height: 2.25rem;
  text-align: left;
  margin-bottom: 1rem;
 
  width: calc(100% - 40px);
  max-width: 600px;
  margin-top: 0;
  vertical-align: baseline;
}



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
    margin: 0;
}
 
   
              #strings {
               
    vertical-align: middle;
    text-decoration: none;
    color: #fff;
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
 