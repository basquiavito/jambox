const labelStyle = {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    padding: 13,
    margin: 0
}
const author= {
    color: '#005689',
    fontWeight: '700',
    fontSize: '1rem',
    lineHeight: '1.6875rem',
    background: '#ffe500',
position: 'relative',
padding: '1px'
}

const label = (props) => {
    return <>
    <h2 className="entryTitle"> 
    <a href="" className="">{props.label}</a></h2>
 <p className="postMeta">
by <span>
<a style={author}  rel="author">Allen Iverson </a></span> | 
<span className="publishedAt"> 1996</span> <br/>|
<a style={author} href="" rel="tag" className="" > 013
</a>

<a href="" className="" rel="tag"></a>
</p>
<div className="postContent">
<div className="postContentInner">
<p>With a power strong enough to move a bull James has conquer the glory.</p>
</div>

<a href="" className="moreLink">
smoke
</a>
</div>

<style jsx>
{`

.author {
    color: #005689;
}

 a.moreLink {
    font-family: 'Noto Sans',Helvetica,Arial,Lucida,sans-serif;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 27px!important;
    padding: 9px 20px;
 
    border-radius: 18px;
    background-color: #ffe500;
    color: #052962;
 }
.entryTitle {
    font-size: 19px!important;
    line-height: 1.2em!important;
 padding: 10px;
    font-family: 'Noto Sans',Helvetica,Arial,Lucida,sans-serif;
    font-weight: bold;
    font-style: normal;
    text-transform: none;
    text-decoration: none;
    color: #e2007b;
    padding-bottom: 10px;
}

@media only screen and (min-width: 981px){
    .entryTitle{
        margin-bottom: 0px;  
    }
}
.postMeta {
     padding-left: 10px;
    font-size: 14px;
    line-height: 1.4em;
    padding-bottom: 0;
    margin-bottom: 6px;
    white-space:nowrap

}

.postMeta a {
    color: #e2007b;  
    font-size: 14px;
    line-height: 1.4em;
    text-decoration: none;
    white-space:nowrap;
}

 .postContent  {
    font-size: 14px;
    line-height: 1.5em;
    padding: 10px;
 }

.postContent * {
margin-bottom: 20px;
}

.postcontent p {
    line-height: 1.5em;
    
    
}
`}



</style>
    </>

}

export default label