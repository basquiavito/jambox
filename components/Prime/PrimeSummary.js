import React, {Component } from 'react'
 import Link from 'next/link'
 import Sectiontitle from '../../components/units/sectiontitle'
 import Sectionsubtitle from '../../components/units/sectionsubtitle'
 import Label from '../../components/units/label'
 import Title from '../../components/units/title'
 import Dekk from '../../components/units/dekk'
import Ptraits from '../../components/units/ptraits'
import FromDaGram from '../../components/units/fromDaGram'
import Bio from '../../components/units/bio'
import Twitter from '../../components/units/twitter'
import Video from '../../components/units/video'
 import Article from '../../components/units/article'
import Mixtape  from '../units/mixtape'
import Play from '../units/play'
import { useRouter } from 'next/router'
import Authordate from '../units/authordate'

class PrimeSummary extends Component{
state={
showHighschool:false,
showCollege:false,
showOffHigh: false,
showRookie: false,
showCareerHigh: false,
showOffHigh: false,
showDefHigh:false,
showDoc:false


}

togglehighschoolHandler = () => {const doesShow = this.state.showHighschool
this.setState({showHighschool: !doesShow})}

toggleCollegeHandler = () => {const doesShow = this.state.showCollege
this.setState({showCollege: !doesShow})}

toggleRookieHandler = () => {const doesShow = this.state.showRookie
  this.setState({showRookie: !doesShow})}

  toggleCareerHighHandler = () => {const doesShow = this.state.showCareerHigh
    this.setState({showCareerHigh: !doesShow})}
  
    toggleOffHighHandler = () => {const doesShow = this.state.showOffHigh
      this.setState({showOffHigh: !doesShow})}
      
      toggleDefHighHandler = () => {const doesShow = this.state.showDefHigh
        this.setState({showDefHigh: !doesShow})}

        toggleDocHandler = () => {const doesShow = this.state.showDoc 
          this.setState({showDoc: !doesShow})}



render(){

 
  
let highschool = null;
 
if (this.state.showHighschool){
highschool = (
  <div className="hsContainer">
    <div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title="Highschool"/>
 <Label label="The Beginnings"/>
  <Video videoId={this.props.highSchool} />
  <Title title={this.props.highSchoolTitle}/>
  <Dekk dekk={this.props.highSchoolDekk}/>
  <Authordate  author={this.props.highSchoolAuthor} date={this.props.highSchoolDate} /><br/>

  <Label label="Growth" />
  <Video videoId={this.props.highSchool1} />
  <Title title={this.props.highSchool1Title}/>
  <Dekk dekk={this.props.highSchool1Dekk}/>
  <Authordate  author={this.props.highSchool1Author} date={this.props.highSchool1Date} /><br/>


</div></div></div>)
 
 

}

let college= null;
if (this.state.showCollege){
college = (
 <div className="pageGrid">
  <div className="gridCenter">
  <Sectiontitle title="College"/>
  <Label label={this.props.from} />
  <Video videoId={this.props.college} />
  <Title title={this.props.collegeTitle}/>
  <Dekk dekk={this.props.collegeDekk}/>
  <Authordate  author={this.props.collegeAuthor} date={this.props.collegeDate} />
 
</div>

<div>
<Label label={this.props.from} />
<Video videoId={this.props.college1} />
<Title title={this.props.college1Title}/>
<Dekk dekk={this.props.college1Dekk}/>
<Authordate  author={this.props.college1Author} date={this.props.college1Date} />

</div>
</div>
)
 

}

let rookie= null;
if (this.state.showRookie){
rookie = (
  <div>
  <div>
  <Sectiontitle title="Rookie"/>
  <Label label={`Rookie ${this.props.lastname}`} />
  <Video videoId={this.props.rookieOff} />
  <Title title={this.props.rookieOffTitle}/>
  <Dekk dekk={this.props.rookieOffDekk}/>
  <Authordate  author={this.props.rookieOffAuthor} date={this.props.rookieOffDate} />
</div>

<div>
  <Label label="First seasons"/>
  <Video videoId={this.props.rookieOff1} />
  <Title title={this.props.rookieOff1Title}/>
  <Dekk dekk={this.props.rookieOff1Dekk}/>
  <Authordate  author={this.props.rookieOff1Author} date={this.props.rookieOffDate} />
</div>
</div>

)
 

}

let careerHigh= null;
if (this.state.showCareerHigh){
careerHigh = (
  <div>
  <div>
  <Sectiontitle title="Career High"/>
  <Label label="Career High"/>
  <Video videoId={this.props.careerHigh} />
  <Title title={this.props.careerHighTitle}/>
  <Dekk dekk={this.props.careerHighDekk}/>
  <Authordate  author={this.props.careerHighAuthor} date={this.props.careerHighDate} />
</div>

<div>
<Label label="Career High"/>
  <Video videoId={this.props.careerHigh1} />
  <Title title={this.props.assistOffTitle}/>
  <Dekk dekk={this.props.careerHighDekk}/>
  <Authordate  author={this.props.careerHighAuthor} date={this.props.careerHighDate} />
</div>
</div>
)
 

}

let offHigh= null;
if (this.state.showOffHigh){
offHigh = (
  <div>
  <div>
  <Sectiontitle title="Offense Mixtape"/>
    <Label label="Scoring" />
  <Video videoId={this.props.offHigh} />
  <Title title={this.props.offHighTitle}/>
  <Dekk dekk={this.props.offHigh1Dekk}/>
  <Authordate  author={this.props.offHighAuthor} date={this.props.offHighDate} />
</div>
  <div>
  <Label label="Scoring II" />
  <Video videoId={this.props.offHigh1} />
  <Title title={this.props.offHigh1Title}/>
  <Dekk dekk={this.props.offHigh1Dekk}/>
  <Authordate  author={this.props.offHigh1Author} date={this.props.offHigh1Date} />

  <div>
  <Label label="Passing" />
  <Video videoId={this.props.assistOff} />
  <Title title={this.props.assistOffTitle} />
  <Dekk dekk={this.props.assistOffDekk}/>
  <Authordate  author={this.props.assistOffAuthor} date={this.props.assistOffDate} />
</div>

<div>
<Label label="Signature Move" />
  <Video videoId={this.props.signatureMove} />
  <Title title={this.props.signatureMoveTitle}/>
  <Dekk dekk={this.props.signatureMoveDekk}/>
  <Authordate author={` ${this.props.signatureMoveAuthor}`} date={this.props.signatureMoveDate}/>
</div>
</div>
</div>

)
 

}


let defHigh= null;
if (this.state.showDefHigh){
  defHigh = (
    <div>
  <div>
  <Sectiontitle title="Defense"/>
  <Label label="Defense"/>
  <Video videoId={this.props.defHigh} />
  <Title title={this.props.defHighTitle} />
  <Dekk dekk={this.props.defHighDekk}/>
  <Authordate  author={this.props.defHighAuthor} date={this.props.defHighDate} />
</div>
<div>
<Label label="Lock Down"/>
  <Video videoId={this.props.defHigh1} />
  <Title title={this.props.defHigh1Title}/>
  <Dekk dekk={this.props.defHigh1Dekk}/>
  <Authordate  author={this.props.defHigh1Author} date={this.props.defHigh1Date} />
</div>
</div>
)
 

}

let doc= null;
if (this.state.showDoc){
  doc = (
    <div>
  <div>
    
  <Sectiontitle title="Documentary"/>
  <Label label="Documentary"/>
  <Video videoId={this.props.doc} />
  <Title title={this.props.docTitle}/>
  <Dekk dekk={this.props.docDekk}/>
  <Authordate  author={this.props.docAuthor} date={this.props.docDate} />
</div>

<div>
<Label label={`On ${this.props.lastname}`}/>
  <Video videoId={this.props.doc1} />
  <Title title={this.props.doc1Title}/>
  <Dekk dekk={this.props.doc1Dekk}/>
  <Authordate  author={this.props.doc1Author} date={this.props.doc1Date} />
</div>






</div>


)
 

}
    return(
      <>
      <Head>
 
 <link
rel="stylesheet" 
href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
/>
 
</Head>
<div id="profile">
<div className="pageGrid">
<div className="gridCenter">

 
<section>
<div className="pageGrid">
<div className="gridCenter">
  <div><h1><Sectiontitle title={`${this.props.name} ${this.props.lastname}`}/></h1></div>
  <div><h1><Sectionsubtitle subtitle={`Get to know ${this.props.lastname}`}/></h1></div><br/>
 
<div>
<figure className="quote">
<blockquote>
<p className="accoladeCaption"> {this.props.accolades}</p>
<figcaption>
<Authordate author={this.props.accoladeAuthor}/> 
<a href={this.props.accoladeLink}>
<cite>{this.props.accoladeSource}</cite>
</a>
</figcaption>
</blockquote>
</figure>
</div><br/>

<Label label = "Profile" />
<Dekk dekk={` ${this.props.team} | #${this.props.number}  | ${this.props.position}`}/>
</div></div>
</section><br/>

<section className="ptraitsContainer">
<div className="pageGrid">
<div className="gridCenter">
<Ptraits feet={this.props.feet} inches={this.props.inches} meters={this.props.meters} kg={this.props.kg} lbs={this.props.lbs} born={this.props.born} from={this.props.from} debut={this.props.debut} years={this.props.years}  />
</div></div>
</section>

<div id="gram">
<div className="pageGrid">
<div className="gridCenter">
<Sectionsubtitle subtitle="Gram"/>
<FromDaGram gram={this.props.gram}/>
 </div></div></div>
 
 <div>
   
 <div className="pageGrid">
<div className="gridCenter">
   <Mixtape 
    latest1={this.props.latest1}
    latest1Title={this.props.latest1Title}
 
    latest2={this.props.latest2}
    latest2Title={this.props.latest2Title}

    latest3={this.props.latest3}
    latest3Title={this.props.latest3Title}

    latest4={this.props.latest4}
    latest4Title={this.props.latest4Title}

    latest5={this.props.latest5}
    latest5Title={this.props.latest5Title}

    latest6={this.props.latest6}
    latest6Title={this.props.latest6Title}

    />
   
   
   
   </div></div>
   </div>

 


<div id="stats">
<div className="pageGrid">
<div className="gridCenter">
<a href={`https://stats.nba.com/player/${this.props.statsId}/`}>
<div className="statContainer">	 
<Label  label="numbers" /> <br/>	 
<Sectiontitle  title="NBA Advanced Stats" /><br/> 
<div className="statLabel"> 
<span className="statsPointer"> points | assists | reb | steals... </span></div>
</div></a></div></div></div>




 <div id=" ">
 <div className="pageGrid">
<div className="gridCenter">


<h3>Popular {this.props.lastname} Plays</h3>
<div>
  
  <Play 
  image={this.props.image} 
  title="Highschool" 
  name="Total Domination" >
  <button 
 
  className="squareButton" 
  onClick={this.togglehighschoolHandler}>See</button></Play>
<section className="hsContainer">
 {highschool}
 </section>
</div>
 



<div>
  <Play image={this.props.imageCollege} title="College" name="" >
    <button
   
     className="squareButton" 
     onClick={this.toggleCollegeHandler}>See</button></Play>
     {college}</div>


<div>
  <Play image={this.props.imageRookie} title="Rookie Season" name="" >
  <button 
  className="squareButton" 
  onClick={this.toggleRookieHandler}>See</button></Play>
{rookie}
</div>


<div>
  <Play image={this.props.imageCareerHigh} title="Career High" name="" >
  <button 
  className="squareButton" 
  onClick={this.toggleCareerHighHandler}>See</button></Play>
{careerHigh}
</div>



<div>
  <Play image={this.props.imageOffHigh} title="Offense Mixtape" name="" >
  <button 
  className="squareButton" 
  onClick={this.toggleOffHighHandler}>See</button></Play>
{offHigh}
</div>

<div>
  <Play image={this.props.imageDefense} title="Defense Mixtape" name="" >
  <button 
  className="squareButton" 
  onClick={this.toggleDefHighHandler}>See</button></Play>
{defHigh}
</div>


<div>
  <Play image={this.props.imageDoc} title="Documentary" name="" >
  <button 
  className="squareButton" 
  onClick={this.toggleDocHandler}>See</button></Play>
{doc}
</div><br/>


<div>
<div className="pageGrid">
<div className="gridCenter">
  <Sectionsubtitle subtitle="tweets"/>
<Twitter token={this.props.twitterToken}/>


</div></div></div>
 

  </div></div>


 </div>

<style jsx>
     {`
     #profile{
        background-color: rgb(255, 255, 255);
        padding: 2.25rem 0px 0px;
     
      
     }


     blockquote p{
      color: #333;
      line-height: 1.69em;
      letter-spacing: normal
      font-size: 2em;
      font-weight: 500;
      font-style: normal;
    
     }
.accoladeCaption{
  font-size: 17px;
}

.quote{
  width: 100%;
  margin:0;
}
     .h2 {
      line-height: 1.36em;
      letter-spacing: -.017em;
      font-family: GTAmerica,helvetica,sans-serif;
      font-size: 22px;
      font-weight: 700;
      font-style: normal;
      text-transform: none;
  }
 .ptraitsContainer{
   background-color: #fff;
 }
     .squareButton { 
     width:76px; 
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
      word-break: break-word;
      background-color: transparent;
      cursor: pointer;
      display: inline-block;
      font-family: Programme, sans-serif;
      font-size: 0.875rem;
      line-height: 1;
      text-align: center;
      vertical-align: top;
      user-select: none;
      -webkit-appearance: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-color: rgb(0, 0, 0);
      transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
      border-width: 2px;
      border-style: solid;
      border-radius: 0px;
      margin: 0px;
      padding: 0.75rem 1.313rem;
  }
     }

     .theAthletic{
       background: #ccc;
       padding: 1rem;
       margin: 1rem;
     }

   

     .pageGrid{
      display: grid;
      -webkit-box-pack: center;
      justify-content: center;
      grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
      grid-row-gap: 30px;
  
  }
     .gridCenter{
        grid-column: center-start / center-end;
     }
     .editorialLink{
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: inherit;

     }

     .editorialContainer{
         margin-bottom: 1rem;
     }

     a {
       
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-decoration: none;
    }

    .pageGridFull{
        grid-column: grid-start / grid-end;
 
    }

  
     
  #hoopcode {
    background-color: rgb(255, 255, 255);
    padding: 2.25rem 0px 0px;
  }


  .loadMore {
    background-color:#fff;
    font:inherit;
    border:1px solid blue;
    padding: 8px;
    cursor:pointer;
  }
  .statContainer{
    text-align: center;
    grid-column: center-start / center-end;
margin-top: 1rem;
background-color:#4183c4; 
padding: 1em;
margin-top: 3rem;
margin-bottom: 3rem;

 

  }

 


.statLabel {
  color:#fff;
  overflow-wrap: break-word;
  word-break: break-word;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  font-family: Programme, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  text-align: center;
  vertical-align: top;
  user-select: none;
  -webkit-appearance: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-color: rgb(0, 0, 0);
  transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
  border-width: 2px;
  border-style: solid;
  border-radius: 0px;
  margin: 0px;
  padding: 0.75rem 1.313rem;
  background: transparent;
}

 
     `}
 </style>



  </div></div></div>
  </>
 

    )}}
    
 



 
export default PrimeSummary
