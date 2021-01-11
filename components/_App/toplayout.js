import Link from 'next/link'
 

export default function tophead(){





    return <>
  
<div id="headerLogo">



<div id="logo">
 
<a  href="/" id="">   
 <span className="rightSide">HOOP</span>SCRIPT  </a>
 

</div>







<div id="log">
 
<a  href="/blogs" id="">  Blog </a>
 

</div>
   


 
 
   
   
   </div>

   
 
 

 
<style jsx>



    {`



#log, #logo{
    margin-right: 10px;
}



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
 background-color: rgb(255 255 100);
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