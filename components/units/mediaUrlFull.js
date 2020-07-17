import Link from 'next/link';
 


function mediaUrlFull(props) {
    const imageContainer = {
        position:'relative',
        paddingBottom: '56.25%',
        background:'center center / auto calc(100% + 1px) repeat-x rgb(233, 233, 233)',
        backgroundPosition:'center center',
        backgroundRepeat: 'repeat-x',
        backgroundImage:`url(${props.mediaUrl})`,
        marginBottom:'2rem',
        marginTop: '1rem'
    }


 
    return(
    <div className="pageGridFull">
    <Link href="/videoPlayer" >
    <div style={imageContainer} className="imageContainer" data-visible="true">
        <noscript><img src={props.mediaUrl} alt="" /></noscript>
        <div className="playOverlayIcon">
<svg viewBox="0 0 22 22"><path fill="#fff" d="M22 0H0v22h22V0z"></path><path className="st0" d="M15.6 11L7.9 6.5v9"></path></svg>

</div>
    </div>
 
    </Link>
 
 <style jsx>
     {`
     .pageGridFull {
        margin:0,
        padding: 0,
        gridColumn: 'grid-start / grid-end',
     }

     .playOverlayIcon{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: 1rem;
        height: 3rem;

     }

     svg:not(:root) {
        overflow: hidden;
    }
.imageContainer {
    position:relative;
        padding-Bottom: 56.25%;
        background:center center / auto calc(100% + 1px) repeat-x rgb(233, 233, 233);
        background-Position:center center;
        background-Repeat: repeat-x;
        background-Image:url(${props.mediaUrl});
        margin-Bottom:2rem;
        margin-Top: 1rem;
}

     .
     `}
 </style>
 
   
            </div>
        )
    }
    
    export default mediaUrlFull

