import App from '../components/app'
import React from 'react';
import KickerHub from '../components/units/kickerHub'
import Billboard64 from '../components/units/billboard64'
import Sectiontitle from '../components/units/sectiontitle'
import CodeHub from '../components/units/codeHub'
import Sectionsubtitle from '../components/units/sectionsubtitle'
function home(){
  return <>
 <main>
 
  <div id="kickerHub">
<KickerHub />
</div> 

  <div id="">
  <CodeHub />
</div>  
<Sectiontitle title="Search"/>
  <div id="app">
   <App />
   </div>  


   </main>   

   <style jsx>
     {`


     main, #kickerHub, #app {
      max-width: 38rem;
      padding: 1rem;
      margin: auto;
  
     }
    
     a {
       text-decoration: none;
 
     }
     
     `}
   </style>
  </>
  
}

export default home