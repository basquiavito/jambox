import Label from '../units/label'
import Title2 from '../units/title2'
import ImageHolder from '../units/imageHolder'
import Image from 'next/image'
import Dekk from '../units/dekk'
import Authordate from '../units/authordate'
const kicker2 = (props) => {
    return <>
 <div className="pageGrid">
<div className="gridCenter"> 


<Label label={props.label} />
<ImageHolder mediaUrl={props.mediaUrl} figcaption={props.figcaption} photographer={props.photographer}/>

<Title2 title={props.title}/>
 
<Dekk dekk={props.dekk} />

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

export default kicker2