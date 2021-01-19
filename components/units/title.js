
 



export default function title(props){
 return<>
<div className="editorialTitle">
<h2 className='headerRow'><span className="balanceHeadline">{props.title}</span></h2>
</div>

<style jsx>{`
 


 .editorialTitle {
     position: relative;
    line-height: 0.8125rem;
 }
.balanceHeadline {
    display: inline-block;
    max-width: 330.961px;
}


.headerRow {
    text-size-adjust: 100%;
    font: inherit;
    vertical-align: baseline;
    transition: color 0.6s ease;
    position: relative;
    font-style: normal;
    margin: 0;
    color: #121212;
    text-align:center;
    color: #121212;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-family: nyt-cheltenham;
    font-size: 1.875rem;
    line-height: 2.0625rem;
    font-weight: 700;
    -webkit-letter-spacing: 0.2px;
    -moz-letter-spacing: 0.2px;
    -ms-letter-spacing: 0.2px;
    letter-spacing: 0.2px;
}                  
            `}</style>
       
    </>
}
 
 
