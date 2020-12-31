import Link from 'next/link'
 

export default function tophead(){





    return <>
  
<div id="headerLogo">



<div id="logo">
 
<a  href="/" id="">   
 <span className="rightSide">hooper</span>OS  </a>
 

</div>


<div>
<Link href="/search">
<a id="hoopers" href="">
 
  <span className="svgContainer">
 <svg viewBox="0 0 21.48 21.59"><path d="M21.48 20.18L14.8 13.5a8.38 8.38 0 1 0-1.43 1.4l6.69 6.69zM2 8.31a6.32 6.32 0 1 1 6.32 6.32A6.32 6.32 0 0 1 2 8.31z"></path></svg> 
 </span>  
 </a>
</Link>

</div>




<div id="log">
 
<a  href="/blogs" id="">   Op-Ed </a>
 

</div>
   


 
 
   
   
   </div>

   
 
 

 
<style jsx>



    {`
.rightSide {
  color:  #e41224;
}
#hoopers {
     cursor: pointer;
    display: block;
    height: 2.825rem;
    width: 2.825rem;
    position: relative;
    border: 0;
    border-radius: 50%;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1069;
    text-align: center;
    padding-top: 10px;
}
svg {
  
    fill: #212121;
    width: 1.5rem; 
  
     
 }
 
#headerLogo {
    display: flex;
    transition: opacity .3s ease-in-out;
    justify-content: space-between;
    height: 41px;
 background-color: ;
    width: 100%;
   color:  rgb(255 255 255); 
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
} 
a {
    color:#212121;
    text-decoration: none;
}
   h1 {
      font-size: 22px;
      
  }
  #logo {
      font-size: 28px;
      
      font-weight: bold;
  }
`}
</style>
    </>


} 