import { Icon } from 'semantic-ui-react'
 import Link from 'next/link'

export default function play(props){

    return<>
    <div id="play">
<div className="pageGrid">
 <div className="gridCenter">

<div className="marginsSetter">
 <div className="miniCard">
<div className={`${'miniCardThumbnail'} ${'backgroundFill'} ${'clippedBackgroundImage'}`}>
</div>  
<div className="miniCardInfo">
<div className="miniCardTitleAndSubtitle">
<div className="miniCardTitle">{props.title}</div>
<div className="miniCardSubtitle">{props.name}</div>




</div>

</div>
</div> 

<div>{props.children}</div>


</div></div></div>
<style jsx>
    {`
 
}

#play {

}

.miniCard{
    border-top: 2px solid #eee;
    border-bottom:2px solid #eee;
    display: flex;
 
    color: inherit;
    min-width: 364px;
    min-height: 56.25px; 
    
}
.miniCardThumbnail{
    background-image:  url('${props.image}')
}

.miniCardThumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    height:100px;
   
    width: 100px;
    position: relative;
}

.backgroundFill{
    background-color: #e9e9e9;
    
}

.clippedBackgroundImage{
    background-position: center;
    background-size: cover;
}
.miniCardInfo{
    display: flex;

    -webkit-box-flex
    -webkit-box-orient: vertical;
    justify-content: space-between;
    font-family: Programme,sans-serif;
    padding: .375rem .375rem .25rem;
    overflow: hidden;
    flex-direction: column;
}

.miniCardTitleAndSubtitle{
display: flex;
-webkit-box-orient: vertical;
flex-direction: column;
}
.miniCardTitle{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 2em;
    overflow: hidden;
    line-height: 1;
    word-break: break-word;
    text-transform: uppercase;
}

.miniCardSubtitle{
    font-size: .75em;
    margin-top: .125rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 2em;
    overflow: hidden;
    line-height: 1;
    word-break: break-word;
    text-transford: uppercase;
}
.metadata{
    font-size: .75em;
}


.statsPageView{

    display: inline;
    fill: #000;
    height: .7em;
    overflow: visible;
    position: relative;
    vertical-align: middle;
}

.pageGrid{
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;

}
.gridCenter{
    grid-column: center-start / center-end;
}
    `}
</style>
</div>
    </>
}