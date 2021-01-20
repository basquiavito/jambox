import Kicker from './kicker'
import Kicker2 from './kicker2'
 
import React, {useState} from 'react'

const kickerhub = () => {
const [ lan, setLan] = useState({
 mainKicker:[
     {label:[ 'Caliente', 'Debut', 'Gloria']},
     {title: ["Kevin Durant & James Harden se combinan para 64 puntos", "Victor Oladipo Debuta con los Rockets", "Steph Curry response a las criticas con un partido de 62 puntos"]},
     {dekk: ["Harden & Durant", "Victor Oladipo debuto con los Rockets and termino 32 PTS, 5 REB, 9 AST & 2 STL","Termino con la mayor cantidad de puntos en su carrera, recordandole a la liga quien es Curry."]},
     {author:['Richard Clemons', 'Justin Telfair',  'Jason Marquez']},
     {date:['Ene 19, 2021', 'Ene 19, 2021', 'Ene 17, 2021']},
    
 ]
         
})
        
const switchEnglishHandler = ()=> {
    setLan({

        mainKicker:[
            {label:[ 'Caliente', 'Debut', 'Vintage']},
            {title: ["Kevin Durant & James Harden combined for 64 points", "Victor Oladipo Debut with the Rockets", "Stephen Curry Answers His Critics With a 62-Point Game"]},
            {dekk: ["Harden & Durant", "Victor Oladipo debut witht the Rockets and finished with  32 PTS, 5 REB, 9 AST & 2 STL", "A career-best performance against Portland reminded the league what the Golden State Warriors guard can do."]},
            {author:['Richard Clemons', 'Justin Telfair', 'Jason Marquez']},
            {date:['Jan 19, 2021', 'Jan 19, 2021', 'Jan 17, 2021']},
           
        ]

    })}   
        
    const switchSpanishHandler = ()=> {
        setLan({
    
            mainKicker:[
                {label:[ 'Caliente', 'Debut', 'Vintage']},
                {title: ["Kevin Durant & James Harden se combinan para 64 puntos", "Victor Oladipo Debuta con los Rockets", "Steph Curry response a las criticas con un partido de 62 puntos"]},
                {dekk: ["Harden & Durant", "Victor Oladipo debuto con los Rockets and termino 32 PTS, 5 REB, 9 AST & 2 STL", "Mayor cantidad de puntos en su carrera, recordandole a la liga quien es el."]},
                {author:['Richard Clemons', 'Justin Telfair',  'Jason Marquez']},
                {date:['Ene 19, 2021', 'Ene 19, 2021', 'Ene 17, 2021']},
               
            ]
    
        })}    
        
    return <>
    
<div id="kicker">
  <div id="buttons">
  <div  className="buttonStyle" onClick={switchEnglishHandler}>English </div>

    <div  className="buttonStyle" onClick={switchSpanishHandler}>Español </div>
 </div>   
    <div className="pageGridMobile">

   
<div className="pageGridCenter">
<div className="editorialContainer">

 <a className="editorialLink" href="https://hoopscript.com/article?_id=6006c4342ba6762fdeae3b45">
    <div id="MainKicker">
<Kicker 
 label={lan.mainKicker[0].label[0]}
 title={lan.mainKicker[1].title[0]}
 dekk={lan.mainKicker[2].dekk[0]}
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611056633/kd_harden_kqu3tu.png"
 author={lan.mainKicker[3].author[0]}
 date={lan.mainKicker[4].date[0]}
/>

</div>
    </a> 

<br/><br/>
 
   <a href="https://hoopscript.com/article?_id=6006c8b02ba6762fdeae3b46">
<div className="secondKicker">
    
    <Kicker2 
 label={lan.mainKicker[0].label[1]}
 title={lan.mainKicker[1].title[1]}
 dekk={lan.mainKicker[2].dekk[1]}
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611057194/Oladipo_Debut_mmg1aw.png"
 author={lan.mainKicker[3].author[1]}
 date={lan.mainKicker[4].date[1]}
    
    />
    
    
    </div></a>
    
   
<br/>

 <a href="https://hoopscript.com/article?_id=5ffa9e2bfeaebf363eaf659e">
<div 
className="thirdKicker">

<Kicker2
 label={lan.mainKicker[0].label[2]}
 title={lan.mainKicker[1].title[2]}
 dekk={lan.mainKicker[2].dekk[2]}
 mediaUrl="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757282/currymss_lhtmdk.jpg"
 author={lan.mainKicker[3].author[2]}
 date={lan.mainKicker[4].date[2]} />
</div>
</a>
</div>
</div>
</div>
</div>
<style jsx>
    {`
    a {
        text-decoration: none;
        color: black;
    }
  
    
    .editorialLink {
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: inherit; 
    }
    .editorialContainer {
        color: rgb(0, 0, 0);
        font-weight: 100;
        line-height: 1.125;
        height: 100%;
        min-height: inherit;   
    }

.pageGridCenter {
    grid-column: center-start / center-end;
}
 

#kicker {
    background-color: rgb(255, 255, 255);
    padding: 2.25rem 0px 0px; 
}

#buttons {
    grid-column: center-start / center-end;
    text-align: center;
    margin-bottom: 3rem;
}

.buttonStyle {
    border-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    overflow-wrap: break-word;
    word-break: break-word;
    transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: 30px;
    cursor: pointer;
    display: inline-block;
    font-family: Programme, Arial, sans-serif;
    font-size: 0.175rem;
    line-height: 1;
margin-right: 5px;
    text-align: center;
    padding: 0.75rem 1.313rem;
    vertical-align: top;
    user-select: none;
    appearance: none;
    text-transform: uppercase;
    letter-spacing: 1px;
}
    `}
</style>
    </>
}

export default kickerhub