const billboard64 = () => {
    return <>
    <head>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,500;0,600;0,700;0,900;1,100;1,300;1,700&display=swap" rel="stylesheet"/>
    </head>
  
<div className="charListWrapper">
<div className="chartListContainer">
<ol className="listElements">
<li className="element">
<button className="elementWrapper">
<span className="elementRank">
<span className="rankNumber">1</span>
<span className="chartTrend">
    <i className="faArrowRight">
<span className="srOnly">
    Steady
</span>
    </i>
</span>
</span>

<span className="elementInformation">
<span className="hoopcodeTitle">232 behind + reverse + behind</span>
 

 
<span className="playerDetails">
Kenny Anderson
</span>

<span className="metas">
<span className="chartElementMeta1">
   views 3.7k
</span>

<span className="chartElementMeta">
    likes: 90%</span>

 

<span className="chartElementMeta">
    aka: Mr.chibbs</span>
    <span className="image">

</span>
 </span>



</span>



</button>
</li>
</ol>

    </div>

</div>

<style jsx>
   {`

   .image {
    background-image: url(https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755593/Kenny-Anderson_fci4zv.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 70px;
    display: flex;
    min-height: 100px;
    flex-shrink: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
   }
    .chartElementMeta1 {
        font-size: 11px;
        line-height: 1.54em;
        margin-left: 0;
        
        color: #8086a0;
        vertical-align: baseline;
        text-align: center;
       }

   .chartElementMeta {
    font-size: 11px;
    line-height: 1.54em;
    margin-left: 20px;
 margin-right: 20px;
    color: #8086a0;
    vertical-align: baseline;
    text-align: center;
   }
 .metas {
    margin-top: 5px;
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
 }
.playerDetails {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.308em;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: baseline;
  color:  #8086a0;
}
   .hoopcodeTitle {
    font-size: 15px;
    margin: 0 0 2px;
    line-height: 1.2;
    font-weight: 600;
    overflow: hidden;
  
    color: #344072;
    vertical-align: baseline;
    padding: 0;
    border: 0;
    font: inherit;
   }
.elementInformation {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
    padding: 23px 20px 20px 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

.srOnly {
    overflow: hidden; 
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    clip: rect(0,0,0,0);
    border: 0;
    font: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
    vertical-align: baseline;
}
   b, em, i, strong {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}
.faArrowRight:before {
    content: "\F061";
}
   .faArrowRight {
       display: inline-block;
       font: normal normal normal 1em/1 FontAwesome;
       font-size: inherit;
       text-rendering: auto;
       -webkit-font-smoothing: antialiased;
   }
   .chartTrend {
    font-size: 11px;
    letter-spacing: -.5px;
    line-height: 17px;
    font-weight: 600;
    color:#8086a0;
   }
.rankNumber {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    width: 80px;
    font-size: 32px;
    line-height: 1.41;
    letter-spacing: -1.23px;
    color: #344072;
    
}

.elementRank {
    width: 80px;
    font-size: 32px;
    line-height: 1.41;
    letter-spacing: -1.23px;
    text-align: center;
    color: #344072;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex-direction: column;
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
 
    vertical-align: baselin
}
.elementWrapper {
    outline: none;
    appearance: none;
    padding: 0;
    border: none;
    margin: 0;
    background-color: rgba(0,0,0,0);
    text-align: left;
    align-items: stretch;
    transition: opacity .123s;
    max-width: 100%;
    display: flex;
    flex-grow: 1;
    font-family: Poppins,verdana,sans-serif;
 
}
   .charListWrapper {
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

.chartListContainer {
    position: relative
}
   
.listElements {
    background-color: #fff;
    border: 1px solid #dfe1ea;
    position: relative;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

.element {
    transition: height .3s ease;
    display: flex;
   

}
   `}  
</style>
    </>
}

export default billboard64