
const byline = (props) => {
    return <>
<div className="headerByline">
<div className="byLineWrapper">
<p className={`${'bylineAuthor'} ${'bylineByline'}`}>
<span className="byLinePreamble">By</span> <span className="bylineNameDetail">
<a className="bylineNameLink">
{props.author}
</a>
 
</span>
</p>
</div>

<time className="publishDate" >{props.date}</time>

</div>


<style jsx>
{`

.publishDate {
    --type-token-name: globalEditorial.context-tertiary;
    line-height: 1.55em;
    letter-spacing: .05em;
    font-family: Arial,helvetica,sans-serif;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    color: #212121;
    display: block;
    padding-top: .5rem;
    text-align: center;
    box-sizing: border-box;
   

}
.bylineNameLink {
    text-decoration: none;
    color: rgb(228, 18, 36);
    text-transform: uppercase;
    font-family: BatonTurbo, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 700;
    transition-property: color, background, text-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    cursor: pointer;

}

.bylineNameDetail {
    display: inline-block;
    margin: 0px;
}
}
.bylineName {
    --type-token-name: globalEditorial.accreditation-core;
    line-height: 1.5em;
    letter-spacing: .05em;
    font-family: BatonTurbo,helvetica,sans-serif;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
    color: rgb(33, 33, 33);
    margin: 0px;
    text-align: center;
    display: block;
}
.byLinePreamble {
    margin: 0px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: BatonTurbo, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 700;
    color: rgb(33, 33, 33);
    word-break: break-word;
}
.bylineAuthor {
    color: rgb(33, 33, 33);
    margin: 0px;
    text-align: center;
    display: block;
}
.bylineByline {
    --type-token-name: globalEditorial.accreditation-core;
    line-height: 1.5em;
    letter-spacing: .05em;
    font-family: BatonTurbo,helvetica,sans-serif;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;   
}
.headerByline {
    padding-top: 1rem;
}


.bylineAuthor {

}
.byLineWrapper {
    margin: 0px;
}
.bylineAuthor:first-child {
    padding-top: 0;
} 
 


`}    
</style>
    </>
}

export default byline