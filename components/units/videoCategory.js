import Link from 'next/link'

export default function VideoCategory(){
    return<>
<div className="videoCategories">

<Link href="">
<a className="category0">
<span className="keyboardFocus" tabIndex="-1">Rookie</span>
</a>
</Link>
<hr width="1" size="12" className="hr1"></hr>

<Link href="">
<a className="category1">
<span className="keyboardFocus" tabIndex="-1">HighSchool</span>
</a>
</Link>
<hr width="1" size="12" className="hr1"></hr>

<Link href="">
<a className="category0">
<span className="keyboardFocus" tabIndex="-1">College</span>
</a>
</Link>
 
</div>
<style jsx>
    {`
    .videoCategories{
        color: #636363;
        line-height: 11px;
    }
    
    div.videoCategories a{
        text-decoration: none;
        text-transform: uppercase;
    }
    @media screen and (max-width: 767px) and (min-width: 320px)
    div.videoCategories a {
        font-size: 10px;
    }
    
    div.videoCategories * {
        display: inline-block;
        vertical-align: middle;
    }
    section.videoInfoLandmark a{
        color: #0096ff;
        font-weight: bold;
    }
    
    .keyboardFocus{
        display: inline-block;
        vertical-align: middle;
    }
    
     hr{
        background-color: #0096ff;
        border: 0;
        margin: 0 10px;
    }
    a{
        font-family: 'Arial', sans-serif;
        font-style: normal;
        text-decoration: none;
        transition: none;
        display: inline-block;
        color: #0096ff;
        font-weight: bold;
         
  
    
    `}
</style>

</>
}