import React from 'react'
import Link from 'next/link';






const header = (props) => {
    return<div>
<section className="teamSixers detailHeaderWrapper row expanded  ">
<header className="small-12 detailHeader detailHeaderContainer">

<section className="playerHeadshot playerItem">
<img src={props.mediaUrl} height='150px'  ></img>
</section>

<section className="playerHeaderDetails">
    <p className="headerDetailsTop">

        <span className="jerseyNumber">#{props.number}</span>
        <span className="headerSeparator"></span>
        <span className="playerPosition">{props.position}</span>
    </p>


<section className="headerDetailsBottom">
    
  <p className="firstName">{props.name}</p>
  <p className="lastName">{props.lastname}</p> <br/>
  <p className="buttonContainer"><button className="buttonFollow">Simmons Hub +</button></p>
</section>
</section>



</header>


    </section>


    </div>
}

export default header