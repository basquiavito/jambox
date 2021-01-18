 import Link from 'next/link'
 import LazyLoad from 'react-lazy-load';
 
 function coderow (props){
 return(
<div className="pageGridFull">
 <div className="chartMobileRow">




<div className="rank">{props.rank}</div>

<div className="coverAndTitleAndRole">
<div className="cover">
 
<div className="sizeImageConainer" data-visible="true">
    <noscript></noscript></div>   </div>
 
<h3 className="titleAndPlayer">
<div className="title">{props.codeTitle}</div>
<div className="player">{props.hoopcodes}</div>
<div className="player">{props.details}</div>
</h3>
</div>

 


</div>



 
 
 

<style jsx>
{`
.pageGridFull {
    grid-column: grid-start / grid-end;
}

 
.chartMobileRow
{

    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    color: inherit;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    grid-auto-rows: minmax(75px, auto);
    font-size: 1rem;
    grid-row-gap: 30px;
    border-bottom: 0.15rem solid rgb(233, 233, 233); 
}

.rank{
    color: #344072;
    vertical-align: baseline
    font-size: 1.313rem;
    font-weight: 100;
    text-align: center;
    align-self: flex-start;
    margin-top: 20px;
    grid-column: span 1 / auto;
}

.cover{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    grid-column: 2 / span 8;
}

.coverAndTitleAndRole{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    grid-column: 2 / span 8;

}
.cover{
    flex-shrink: 0; 
}

.sizeImageConainer{
    position: relative;
    width: 60px;
    height: 60px;
    background:  0% 0% / cover rgb(233, 233, 233);

}
.sizeImageConainer{
    background-image: url(${props.image})
}
.titleAndPlayer{
    margin-left: 1.5rem;
    min-width: 0px;
    line-height: 1.125;  
}

.title{
    overflow-wrap: break-word;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #344072;
    vertical-align: baseline;
}


.player{
    font-weight: 100;
    overflow-wrap: break-word;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    color: #344072;
    vertical-align: baseline
}
.textLabel{
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(154, 154, 154)
}
.iconWithLabelContainer{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.icon {
    width: 1rem;
    margin-right: 0.5rem;
    position: relative;
    top: -2px;
    flex-shrink: 0;
    display: block;
    height: 100%;
    fill: rgb(0, 0, 0);
    overflow: visible;
}
.textLabelIcon{
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color:#000;
}
.metadatumView{
    margin-bottom: 0.25rem;
    flex: 1 1 0%;
}
.
`
}

</style>
        </div>
    )
}

export default coderow