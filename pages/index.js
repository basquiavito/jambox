import App from '../components/app'
import React from 'react';
import KickerHub from '../components/units/kickerHub'
function home(){
  return <>
 <main>
   <div id="kickerHub">
<KickerHub />
</div>



   <div id="app">
   <App />
   </div>


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