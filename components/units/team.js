import React,{ Component} from 'react'
import Equipo from '../units/equipo'

export default class team extends Component{
    state={
     phila:[
          {name: 'Joel Embiid', href:'/profile?_id=5ec40a4e4f40fc16020d71f1', },
          {name: 'Ben Simmons', href:'/profile?_id=5ebe073dfc39ce7add9941f8', } , 
          {name: 'Al Horford', href:'/profile?_id=5ec40ad64f40fc16020d71f2', },
          {name: 'Joel Embiid', href:'/profile?_id=5ec40a4e4f40fc16020d71f1', },
          {name: 'Ben Simmons', href:'/profile?_id=5ebe073dfc39ce7add9941f8', } , 
          {name: 'Al Horford', href:'/profile?_id=5ec40ad64f40fc16020d71f2', },
          {name: 'Joel Embiid', href:'/profile?_id=5ec40a4e4f40fc16020d71f1', },
          {name: 'Ben Simmons', href:'/profile?_id=5ebe073dfc39ce7add9941f8', } , 
          {name: 'Al Horford', href:'/profile?_id=5ec40ad64f40fc16020d71f2', },
          {name: 'Joel Embiid', href:'/profile?_id=5ec40a4e4f40fc16020d71f1', },
          {name: 'Ben Simmons', href:'/profile?_id=5ebe073dfc39ce7add9941f8', } , 
          {name: 'Al Horford', href:'/profile?_id=5ec40ad64f40fc16020d71f2', },
        ],
        lakers:[
            {name: 'Alex Caruso', href:'/profile?_id=5ec414264f40fc16020d7201',},
            {name: 'Lebron James', href:'/profile?_id=5ec4111b4f40fc16020d71fa', } , 
            {name: 'Anthony Davis', href:'/profile?_id=5ec411b04f40fc16020d71fb'}, 
            {name: 'Alex Caruso', href:'/profile?_id=5ec414264f40fc16020d7201',},
            {name: 'Lebron James', href:'/profile?_id=5ec4111b4f40fc16020d71fa', } , 
            {name: 'Anthony Davis', href:'/profile?_id=5ec411b04f40fc16020d71fb'},   
            {name: 'Alex Caruso', href:'/profile?_id=5ec414264f40fc16020d7201',},
            {name: 'Lebron James', href:'/profile?_id=5ec4111b4f40fc16020d71fa', } , 
            {name: 'Anthony Davis', href:'/profile?_id=5ec411b04f40fc16020d71fb'},  
            {name: 'Alex Caruso', href:'/profile?_id=5ec414264f40fc16020d7201',},
            {name: 'Lebron James', href:'/profile?_id=5ec4111b4f40fc16020d71fa', } , 
            {name: 'Anthony Davis', href:'/profile?_id=5ec411b04f40fc16020d71fb'},  
        ],
        bucks:[
            {name: 'G AtentoKounmpo', href:'/profile?_id=5ec9b43f76b43b87b4456077'},
            {name: 'Eric Bledsoe', href:'/profile?_id=5ec9b43f76b43b87b445606d'} , 
            {name: 'Khris Middleton', href:'/profile?_id=5ec9b43f76b43b87b4456076'},  
            {name: 'G AtentoKounmpo', href:'/profile?_id=5ec9b43f76b43b87b4456077'},
            {name: 'Eric Bledsoe', href:'/profile?_id=5ec9b43f76b43b87b445606d'} , 
            {name: 'Khris Middleton', href:'/profile?_id=5ec9b43f76b43b87b4456076'},  
            {name: 'G AtentoKounmpo', href:'/profile?_id=5ec9b43f76b43b87b4456077'},
            {name: 'Eric Bledsoe', href:'/profile?_id=5ec9b43f76b43b87b445606d'} , 
            {name: 'Khris Middleton', href:'/profile?_id=5ec9b43f76b43b87b4456076'},  
            {name: 'G AtentoKounmpo', href:'/profile?_id=5ec9b43f76b43b87b4456077'},
            {name: 'Eric Bledsoe', href:'/profile?_id=5ec9b43f76b43b87b445606d'} , 
            {name: 'Khris Middleton', href:'/profile?_id=5ec9b43f76b43b87b4456076'},  
        ],

        pelicans:[
            {name: 'Lonzo Ball', href:'/profile?_id=5ee992f4eef22e05cea6ee2d', id:'0'},
            {name: 'Zion Williamson', href:'/profile?_id=5ee992f4eef22e05cea6ee30', id:'1'} , 
            {name: 'Brandon Ingram', href:'/profile?_id=5ee992f4eef22e05cea6ee2f', id:'2'},  
            {name: 'Lonzo Ball', href:'/profile?_id=5ee992f4eef22e05cea6ee2d', id:'0'},
            {name: 'Zion Williamson', href:'/profile?_id=5ee992f4eef22e05cea6ee30', id:'1'} , 
            {name: 'Brandon Ingram', href:'/profile?_id=5ee992f4eef22e05cea6ee2f', id:'2'},  
            {name: 'Lonzo Ball', href:'/profile?_id=5ee992f4eef22e05cea6ee2d', id:'0'},
            {name: 'Zion Williamson', href:'/profile?_id=5ee992f4eef22e05cea6ee30', id:'1'} , 
            {name: 'Brandon Ingram', href:'/profile?_id=5ee992f4eef22e05cea6ee2f', id:'2'},  
            {name: 'Lonzo Ball', href:'/profile?_id=5ee992f4eef22e05cea6ee2d', id:'0'},
            {name: 'Zion Williamson', href:'/profile?_id=5ee992f4eef22e05cea6ee30', id:'1'} , 
            {name: 'Brandon Ingram', href:'/profile?_id=5ee992f4eef22e05cea6ee2f', id:'2'},  
        ],

        portland:[
            {name: 'Damian Lillard', href:'/profile?_id=5ec9c4a2869eebd58664a641', id:'0'},
            {name: 'CJ Mccollum', href:'/profile?_id=5ec9c4a2869eebd58664a642', id:'1'} , 
            {name: 'Hassan Whiteside', href:'/profile?_id=5ec9c4a2869eebd58664a63c', id:'2'},  
            {name: 'Damian Lillard', href:'/profile?_id=5ec9c4a2869eebd58664a641', id:'0'},
            {name: 'CJ Mccollum', href:'/profile?_id=5ec9c4a2869eebd58664a642', id:'1'} , 
            {name: 'Hassan Whiteside', href:'/profile?_id=5ec9c4a2869eebd58664a63c', id:'2'},  
            {name: 'Damian Lillard', href:'/profile?_id=5ec9c4a2869eebd58664a641', id:'0'},
            {name: 'CJ Mccollum', href:'/profile?_id=5ec9c4a2869eebd58664a642', id:'1'} , 
            {name: 'Hassan Whiteside', href:'/profile?_id=5ec9c4a2869eebd58664a63c', id:'2'},  
            {name: 'Damian Lillard', href:'/profile?_id=5ec9c4a2869eebd58664a641', id:'0'},
            {name: 'CJ Mccollum', href:'/profile?_id=5ec9c4a2869eebd58664a642', id:'1'} , 
            {name: 'Hassan Whiteside', href:'/profile?_id=5ec9c4a2869eebd58664a63c', id:'2'},  
        ]
    }
render(){
    return<>
    
    <div className="phila"><strong className="teamTitle">76ers</strong>{ this.state.phila.map(p =>{return <Equipo
    name={p.name} href={p.href} /> }) }</div>
    
    <div className="lakers"><strong>Lakers</strong>{ this.state.lakers.map(p =>{return <Equipo
    name={p.name} href={p.href} /> }) }</div>
    
     
    <div className="bucks"><strong>Bucks</strong> { this.state.bucks.map(p =>{return <Equipo
    name={p.name} href={p.href} /> }) }</div>
    
    <div className="pelicans"><strong>Pelicans</strong> { this.state.pelicans.map(p =>{return <Equipo
    name={p.name} href={p.href} /> }) }</div>
    
    <div className="portland"><strong>Portland</strong>{ this.state.portland.map(p =>{return <Equipo
    name={p.name} href={p.href} /> }) }</div>
    <style jsx>
        {`
div {
    padding-top:5px;
    display:inline-block;
 min-width: 164px;
    margin: 0.3rem;
    font-family: san-serif;
}
div > strong {
    display: flex;
  
    color: #000;
    font-size: 1.5em;
    text-transform: uppercase;
}

        `}
    </style>
    
    </>


}}



 



