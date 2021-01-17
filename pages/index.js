import App from '../components/app'
import React from 'react';


function home(){
  return <>
 <main>
   
<App />

   </main>   

   <style jsx>
     {`
     main {
      max-width: 38rem;
      padding: 1rem;
      margin: auto;
  
     }
    
     
     
     `}
   </style>
  </>
  
}

export default home