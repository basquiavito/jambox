import React, {Component} from 'react'
import Person from '../units/person'
class Personas extends Component{
    state= {
        persons: [
            {id:'001', name: 'Max', team: 'Lakers', pos: 'Guard'},
            {id:'002', name: 'Jay', team: 'Knicks', pos: 'Center'},
            {id:'003', name: 'Cuz', team: 'Celtics', pos: 'Forward'},
        ],

        showPersons: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    
}



render(){
const style= {
    backgroundColor: 'green',
    font:'inherit',
    padding: '8px',
    cursor:'pointer',
    color: '#fff',
    minWidth:'100px'
}


let persons = null;

if (this.state.showPersons){
persons = (
    <div>{this.state.persons.map((p, index) => {
       return <Person 
        name={p.name}
        team={p.team}
        pos={p.pos}
        key={p.id}

        />

    })}
 
</div>
)
style.backgroundColor = 'red'
style.minWidth = '500px'
}  
        return <>

<div className="home">
    <div className="boton">
<button style={style} onClick={this.togglePersonsHandler}>modify me</button> 
</div>
</div>
{persons}
 


 <style jsx>
     {`
    .home {
         text-align: center;
         margin-top: 2rem;
     }


     .boton {
         margin-bottom: 3rem;
     }
     `}
 </style>
        </>
    }
}

export default Personas