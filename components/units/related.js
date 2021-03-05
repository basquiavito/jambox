const related = (props) => {
    return <>
<div id="row">

<div className="colMd6">
<a href={props.href}>
<div className="videoFeaturedItem">
<img      width="187.5px" height="110px" className="imgResponsive"
   src={`http://i.ytimg.com/vi/${props.value}/hqdefault.jpg`}>
  </img>
  <p className="relatedDetails" >
{props.cotorra}
</p>
</div>

</a>
</div>

    
<div className="colMd6">
<a href={props.href1}>
<div className="videoFeaturedItem">
<img      width="187.5px" height="110px" className="imgResponsive"
   src={`http://i.ytimg.com/vi/${props.value1}/hqdefault.jpg`}>
  </img>
  <div className="grafContainer">
  <p className="relatedDetails" >
{props.cotorra1}
</p>
  </div>
 
</div>

 
 
</a>
</div>

</div>
<style jsx>
{`
p {
    margin-top: 0;
    margin-bottom: 1rem;
    transition: color 0.3s ease-out;
}

.grafContainer {
    transition: color 0.3s ease-out;
    margin-top: 0.3125rem;
    font-size: 1.1875rem;
    display: block;
    text-size-adjust: 100%;
    font: inherit;
    vertical-align: baseline;
}
.relatedDetails {
    color: rgb(18 18 18);
 
    font-family: nyt-cheltenham, georgia, "times new roman", times, serif;
    font-weight: 600;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 0.75rem;
    line-height: 1.3125rem;
 
}



@media (min-width: 600px){
 
    .relatedDetails {
    font-size: 1.1rem;
    line-height: 1.6875rem;
}}
.imgResponsive {
    max-width: 100%;
    height: 110px;
    width: 100%;
    padding: 2px;
    border: 0;
    border-radius: .45rem;
    background-color: #fff;
}

.videoFeaturedItem {
    max-width: 230px;  
    margin: 5px;
}
#row {
display: flex;
flex-flow: row wrap;
margin-top: 3rem;
border-top: 1px solid #DCDCDC;

}

.colMd6 {
    flex: 0 0 50%;
    max-width: 50%;  
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
}

`}
</style>
    </>
}

export default related 