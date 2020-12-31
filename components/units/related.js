const related = (props) => {
    return <>
<div id="row">

<div className="colMd6">
<a href="">
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
<a href="">
<div className="videoFeaturedItem">
<img      width="187.5px" height="110px" className="imgResponsive"
   src={`http://i.ytimg.com/vi/${props.value1}/hqdefault.jpg`}>
  </img>
  <p className="relatedDetails" >
{props.cotorra1}
</p>
</div>

 
 
</a>
</div>

</div>
<style jsx>
{`
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.relatedDetails {
    color: #00488f !important;
    font-weight: 600;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: .009em;
    font-family: Arial, Verdana, sans-serif;
    line-height: 1.2em;
    text-align: center;
    width:97%;
 
}
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
}
#row {
display: flex;
flex-flow: row wrap;
margin: 0;

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