import React, {useState} from 'react'
import Label from '../units/label'
import Title from '../units/title'
import ImageHolder from '../units/imageHolder'
import Image from 'next/image'
import Dekk from '../units/dekk'
import Authordate from '../units/authordate'




const kicker = (props) => {
  
    return <>
 <div className="pageGrid">
<div className="gridCenter"> 

 

<Label label={props.label} />
<Title title={props.title}/>
 
<Dekk dekk={props.dekk} />
<Authordate author={props.author} date={props.date}/>

<ImageHolder mediaUrl={props.mediaUrl} />

 </div></div>
<style jsx>

  {`

  .divider {
    padding-top: 8px;
    background-color: transparent;
    vertical-align: baseline;
  }
 
  
  
  
  `}  
</style>
    </>
}

export default kicker