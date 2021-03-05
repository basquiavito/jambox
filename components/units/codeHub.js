import React, {Component} from 'react'
import Coderow from './coderow'
import styles from '../../styles/codes.module.css'
import Sectiontitle from './sectiontitle'
import HcHeadline from './hcHeadline'

 export default class coderowHub extends Component {
state={
hoopcodes:[{id:1, href:'https://hoopscript.com/article?_id=6019b8b26a57486615252ebd',
 rank:'1', 
image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg', 
codeTitle:'Lamelo Ball',
 hoopcodes:'27 Points', 
 details:'Outlier'
},

{id:2, href:'https://hoopscript.com/article?_id=6019bc8e6a57486615252ebe',
 rank:'2', 
image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612275888/aaronfox_koybrw.jpg', 
codeTitle:"De' Aaron Fox",
 hoopcodes:'+35 Points', 
 details:'Outlier'
},

{id:3, href:'https://hoopscript.com/article?_id=6019bd0d6a57486615252ebf',
 rank:'3', 
image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612299659/nassir_little_gt1w3y.jpg', 
codeTitle:'Nassir Little',
 hoopcodes:'+30 Points', 
 details:'Outlier'
},

{id:4, href:'https://hoopscript.com/article?_id=6019bdb46a57486615252ec0',
 rank:'4', 
image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756639/trae_dr7yhl.jpg', 
codeTitle:'Trae Young',
 hoopcodes:'+40 Points', 
 details:'Elite'
},
{id:5, href:'https://hoopscript.com/article?_id=6019be436a57486615252ec1',
 rank:'5', 
image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612300010/malik_monk_wp7gvf.jpg',
codeTitle:'Malik Monk',
 hoopcodes:'+35 Points', 
 details:'Elite'
},


],
showMore: false,
buttonTitle: 'Show More'
}
loadMoreHandler = () => {
const doesShow = this.state.showMore  ;
this.setState({showMore : !doesShow})}

todayHandler = () => {
  this.setState({
    hoopcodes:[
      ,
      
      {id:1, href:'https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b',
       rank:'1', 
      image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg', 
      codeTitle:'Kevin Durant',
       hoopcodes:'802', 
       details:'Pop Back'
      },
      
      {id:2, href:'https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b',
       rank:'2', 
      image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610999508/zion_kfgvea.jpg', 
      codeTitle:'Zion Williamson',
       hoopcodes:'802', 
       details:'Pop Back'
      },
      
      {id:3, href:'https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b',
       rank:'3', 
      image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611060734/rozier_bnif1o.jpg', 
      codeTitle:'Terry rozier',
       hoopcodes:'802', 
       details:'Pop Back'
      },
      
      {id:4, href:'https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b',
       rank:'4', 
      image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg', 
      codeTitle:'Lamelo Ball',
       hoopcodes:'802', 
       details:'Pop Back'
      },
      {id:5, href:'https://hoopscript.com/article?_id=5fff5ca6266996a629af6c3b',
       rank:'5', 
      image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610757176/lavine_zm0wjm.jpg', 
      codeTitle:'Zach Lavine',
       hoopcodes:'802', 
       details:'Pop Back'
      },

   ]})
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
pullupHandler = () => {
         this.setState({
          hoopcodes:[
            {id:7, href:'https://hooperos.com/article?_id=6019a0b31081c57f5e7542db',
            rank:'1', 
            image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756849/currymss_f90cww.jpg', 
            codeTitle:'Stephen Curry', 
            hoopcodes:'806', 
            details:'Pullup'
            },
            {id:7, href:'https://hoopscript.com/article?_id=6019b6a46a57486615252eba',
            rank:'2', 
            image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611331137/kyrie_johgsy.jpg', 
            codeTitle:'Kyrie Irving', 
            hoopcodes:'806', 
            details:'Pullup'
            },
            {id:7, href:'https://hoopscript.com/article?_id=6019b7276a57486615252ebb',
            rank:'3', 
            image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612292066/paul_kdoj46.jpg', 
            codeTitle:'Chris Paul', 
            hoopcodes:'+30 Points', 
            details:'Pullup'
            },
            {id:7, href:'https://hoopscript.com/article?_id=6019b7ad6a57486615252ebc',
            rank:'4', 
            image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg', 
            codeTitle:'Kevin Durant', 
            hoopcodes:'35 Points', 
            details:'Outlier'
            },
            {id:7, href:'https://hoopscript.com/article?_id=5fff3664911749ccd1882e61',
            rank:'5', 
            image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755872/tatum4_jdsaee.jpg', 
            codeTitle:'Jayson Tatum', 
            hoopcodes:'535', 
            details:'Pullup'
            },
          
          
          ],
         })
      } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
turnaroundHandler = () => {
  this.setState({
   hoopcodes:[
     {id:7, href:'https://hooperos.com/article?_id=6019873e1081c57f5e7542d6',
     rank:'1', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612285973/embiidkik_nn5ytf.jpg', 
     codeTitle:'Joel Embiid', 
     hoopcodes:'80P', 
     details:'Postup'
     },
     {id:7, href:'https://hooperos.com/article?_id=601988c61081c57f5e7542d7',
     rank:'2', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756357/kd_a3nisa.jpg', 
     codeTitle:'Kevin Durant', 
     hoopcodes:'80P', 
     details:'Fadeaway'
     },
     {id:7, href:'https://hooperos.com/article?_id=601989f21081c57f5e7542d8',
     rank:'3', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611866424/lebronj_wbfwn2.jpg', 
     codeTitle:'Lebron James', 
     hoopcodes:'80P', 
     details:'TAFA'
     },
     {id:7, href:'https://hooperos.com/article?_id=60198bd21081c57f5e7542d9',
     rank:'4', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612287063/nikola_lazbmt.jpg', 
     codeTitle:'Nikolas Jokic', 
     hoopcodes:'80P', 
     details:'Turnaround Hook'
     },
     {id:7, href:'https://hoopscript.com/article?_id=60198cba1081c57f5e7542da',
     rank:'5', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755721/carmelo_v4uktj.jpg', 
     codeTitle:'Carmelo Anthony', 
     hoopcodes:'80P', 
     details:'TAFA'
     },
    
    ],
  })
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
layupHandler = () => {
  this.setState({
   hoopcodes:[
     {id:1, href:'https://hooperos.com/article?_id=60195d92bb77d936592e163f',
     rank:'1', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612275888/aaronfox_koybrw.jpg', 
     codeTitle:"D' Aaron Fox", 
     hoopcodes:'807', 
     details:'Spin'
     },

     {id:7, href:'https://hooperos.com/article?_id=601979f71081c57f5e7542d3',
     rank:'2', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612282622/quickley_bcxyrs.jpg', 
     codeTitle:'Inmanuel Quickley', 
     hoopcodes:'Layup', 
     details:'Floating'
     },

     {id:7, href:'https://hoopscript.com/article?_id=60197bc31081c57f5e7542d4',
     rank:'3', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611866712/luka_y3hghb.jpg', 
     codeTitle:'Luka Doncic', 
     hoopcodes:'Layup', 
     details:'Finger Roll'
     },

     {id:7, href:'https://hoopscript.com/article?_id=60197d391081c57f5e7542d5',
     rank:'4', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612283168/murray_aobcpy.jpg', 
     codeTitle:'Jamal Murray', 
     hoopcodes:'Layup', 
     details:'Finger Roll'
     },

     {id:7, href:'https://hoopscript.com/article?_id=601978741081c57f5e7542d2',
     rank:'5', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610756714/kawhi-leonard_h1hlsl.jpg', 
     codeTitle:'Kawhi Leonard', 
     hoopcodes:'807', 
     details:'SPin'
     },

     {id:7, href:'https://hoopscript.com/article?_id=6019a9ea1081c57f5e7542dc',
     rank:'6', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611331137/kyrie_johgsy.jpg', 
     codeTitle:'Kyrie Irving', 
     hoopcodes:'Layup', 
     details:'Underhand'
     },
    
    
    
    ],
  })
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
dunkHandler = () => {
  this.setState({
   hoopcodes:[
     {id:7, href:'https://hooperos.com/article?_id=6014771544a81254b901ff59',
     rank:'1', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612274123/edward_x9ok7a.jpg', 
     codeTitle:'Anthony Edwards', 
     hoopcodes:'Dunk', 
     details:'Slam'
     },
     {id:7, href:'https://hooperos.com/article?_id=6005e8e9d10d9c718cd9f5f4',
     rank:'2', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612274274/zion3_sddcsj.jpg', 
     codeTitle:'Zion Williamson', 
     hoopcodes:'Dunk', 
     details:'Slam'
     },

     {id:7, href:'https://hooperos.com/article?_id=6005ebe1d10d9c718cd9f5f5',
     rank:'3', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611000702/Paul-George_wlqwaa.jpg', 
     codeTitle:'Paul George', 
     hoopcodes:'Dunk', 
     details:'Slam'
     },

     {id:7, href:'https://hoopscript.com/article?_id=6005f441d10d9c718cd9f5f7',
     rank:'4', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612274549/milesbridg_q4pi8y.jpg', 
     codeTitle:'Miles Bridges', 
     hoopcodes:'Dunk', 
     details:'Slam'
     },

     {id:7, href:'https://hoopscript.com/article?_id=60195c29bb77d936592e163e',
     rank:'5', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg', 
     codeTitle:'Lamelo Ball', 
     hoopcodes:'Dunk', 
     details:'PutBack'
     },
     {id:7, href:'https://hooperos.com/article?_id=5ffcc7d2481c848306249f15',
     rank:'6', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611060734/rozier_bnif1o.jpg', 
     codeTitle:'Terry Rozier', 
     hoopcodes:'Dunk', 
     details:'Driving'
     },
     ,
    
    
    ],
  })
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
passingHandler = () => {
  this.setState({
   hoopcodes:[
     {id:7, href:'https://hoopscript.com/article?_id=5ffdd22757b5d4568868a678',
     rank:'1', 
     image:'https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610755554/lamelo_mft4ov.jpg', 
     codeTitle:'Lamelo Ball', 
     hoopcodes:'806', 
     details:'Passing'
     }],
  })
}
render(){
  const style= {
    backgroundColor: 'green',
    font:'inherit',
    padding: '8px',
    cursor:'pointer',
    color: '#fff',
    minWidth:'300px'
}

let codes = null;

if (this.state.showMore){
  codes = (
<div>{this.state.hoopcodes.slice(5,7).map((p, index) =>{
return <Coderow 
href={p.href}
rank={p.rank}
image={p.image}
codeTitle={p.codeTitle}
hoopcodes={p.hoopcodes}
debut={p.debut}
key={p.id}
details={p.details}

/>
    } )}


    </div>
  )

  style.backgroundColor = 'black'
 

}
  return <>


<Sectiontitle title={this.props.title}/>

 
<div className={styles.buttonsHub}>
  
<ul className={`${styles.chartSorter} ${styles.displayflex} ${styles.alignCenter}`}>

<li className={`${styles.chartSorterElement} ${styles.textAlign}`}>
<button onClick={this.todayHandler}  aria-pressed="true" aria-label="Sort by rank position" className={`${styles.chartSorterButton} ${styles.fontSemiBold} ${styles.textCenter} ${styles.textUppercase}`}>New</button>
</li>

<li className={`${styles.chartSorterElement} ${styles.textAlign}`}>
<button onClick={this.pullupHandler} aria-pressed="true" aria-label="Sort by rank position" className={`${styles.chartSorterButton} ${styles.fontSemiBold} ${styles.textCenter} ${styles.textUppercase}`}>Pullup</button>
</li>

<li className={`${styles.chartSorterElement} ${styles.textAlign}`}>
<button onClick={this.turnaroundHandler} aria-pressed="true" aria-label="Sort by rank position" className={`${styles.chartSorterButton} ${styles.fontSemiBold} ${styles.textCenter} ${styles.textUppercase}`}>TAFA</button>
</li>

<li className={`${styles.chartSorterElement} ${styles.textAlign}`}>
<button onClick={this.layupHandler}  aria-pressed="true" aria-label="Sort by rank position" className={`${styles.chartSorterButton} ${styles.fontSemiBold} ${styles.textCenter} ${styles.textUppercase}`}>Layup</button>
</li>

<li className={`${styles.chartSorterElement} ${styles.textAlign}`}>
<button onClick={this.dunkHandler} aria-pressed="true" aria-label="Sort by rank position" className={`${styles.chartSorterButton} ${styles.fontSemiBold} ${styles.textCenter} ${styles.textUppercase}`}>DUnk</button>
</li>
</ul>
</div>
 

 
<div>{this.state.hoopcodes.slice(0,5).map((p, index) =>{
return <Coderow 
href={p.href}
rank={p.rank}
image={p.image}
codeTitle={p.codeTitle}
hoopcodes={p.hoopcodes}
debut={p.debut}
details={p.details}

/>
    } )}


    </div>

{codes}
    <div className="button">
<button className="loadMore" onClick={this.loadMoreHandler}>{this.state.buttonTitle}</button>

</div>
 <style jsx>
     {`
 
 
ol, ul {
  list-style: none;
}
  
.button {
  grid-column: center-start / center-end;
    text-align: center;
    margin-top: 2rem;
}
 
.loadMore{
  border-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  overflow-wrap: break-word;
  word-break: break-word;
  transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: 0px;
  cursor: pointer;
  display: inline-block;
  font-family: Programme, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  margin: 0px;
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
 }


  
 
 
 
  

 
 