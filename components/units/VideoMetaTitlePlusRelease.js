import Link from 'next/link'

export default function VideoMetaTitlePlusRelease(){
    return <>

<div className="videoMeta">
<ul><li>
    
    <span className="keyboardFocus" tabIndex="-1">
<Link href=""><a> Hoopscript</a></Link>
    </span>
    
    </li></ul>

    
    <div className="releaseDate">
        Released on Jul/22/2020
    </div>
    
    <div id="videoMetaStatus" className="liveRegion" role="status"></div>
</div> 
 
    
    <style jsx>


        {`
        videoMeta{
            font-family: georgia, serif;
            msrgin-bottom: 2rem;
        }
        @media screen and (max-width: 767px) and (min-width: 320px){
        .videoMeta{
            font-size: 12px;
        }}
        
        div.videoMeta {
            font-size: 14px;
            font-style: italic;
            color: #999;
        }
        
        div.videoMeta ul {
            display: inline-block;  
        }
        
        
        div.videoMeta ul li {
            display: inline-block;
            border-right: 1px solid #636363;
            line-height: 1;
            margin-right: 15px;
            padding-right: 15px;
        }
        
        
        .videoInfoPanel ul li{
            list-style-type: none;
        }
        
        
        .videoMeta  a{
            font-family: 'Arial', sans-serif;
            font-style: normal;
            text-decoration: none;
            transition: none;
            display: inline-block;
            color: #0096ff;
            font-weight: bold;
         
        }
        
        div.videoMeta {
            font-style: italic;
            color: #999;
        }
        
        
        .videoDescription {
            margin: 0 0 20px;
        }
        
        .releaseDate{
            display: inline-block;
        }
        
        
        .videoInfoPanel div.videoMeta .liveRegion{
            position: absolute;
          
            clip: rect(1px, 1px, 1px, 1px);
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
        }
        
        `}
    </style>
    </>
}