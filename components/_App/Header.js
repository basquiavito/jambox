import Link from 'next/link'

export default function header(){
    return <>
 
<div className="topBar">
<Link href="/"> 
<div id="headerLogo">
    <h1>
      
    <a id="Logo">
        Hooperos.com
     </a>   
    </h1>
</div>
</Link>

<Link href="/blogs" >
<div id="blog">
<a id="blog">
    Blog
     </a> 
</div>
</Link>

<Link href="/search">
<div id="search">
<a  id="Logo">
<svg viewBox="0 0 21.48 21.59"><path d="M21.48 20.18L14.8 13.5a8.38 8.38 0 1 0-1.43 1.4l6.69 6.69zM2 8.31a6.32 6.32 0 1 1 6.32 6.32A6.32 6.32 0 0 1 2 8.31z"></path></svg>
     </a> 
</div>
</Link>


</div>

 


 

 
<style jsx>
    {  `


#blog {
    font-size: 0.875rem;
    font-family: montserrat, sans-serif;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(255, 255, 255); 
    font-weight: 700;
    display: block;
    letter-spacing: 0.2px;
    vertical-align: baseline; 
}
#headerLogo h1 {
    position: relative !important;
    top: 2px !important;
    display: block;
    font-family: montserrat, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
  
}

#headerLogo {
    text-align: center;
    margin-left: 10px;
    font-size: 12px;
    letter-spacing: -3px;
    display: block;
    float: left;
}

 #search svg {
     fill: #fff;
    width: 18px;
    margin-right: 8px;
 }
    #search {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 0px 0.375rem;
    }
 
 

 
 

 
 
 
a {
   
    cursor: pointer;
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
}


 

  
    .topBar{
    background-color : #d00;
    margin: 0;
    height: 41px;
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
     
        
    }
    `}
</style>
    </>
}

 