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
<Label label={props.label} /><br/>
<Title title={props.title}/>
<div color="orange" className="divider"></div>
<Dekk dekk={props.dekk} />
<ImageHolder mediaUrl={props.mediaUrl} figcaption={props.figcaption} photographer={props.photographer}/><br/>

<Authordate author={props.author} date={props.date}/>
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