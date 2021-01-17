import Label from '../units/label'
import Title from '../units/title'
import ImageHolder from '../units/imageHolder'
import Image from 'next/image'
import Dekk from '../units/dekk'
import Authordate from '../units/authordate'
const kicker = (props) => {
    return <>
    <main> 
<Label label={props.label} /><br/>
<Title title={props.title}/>
<div color="orange" className="divider"></div>
<Dekk dekk={props.dekk} dekk1={props.dekk1}/>
<ImageHolder mediaUrl={props.mediaUrl} figcaption={props.figcaption} photographer={props.photographer}/><br/>

<Authordate author={props.author} date={props.date}/>
 </main>
<style jsx>

  {`

  .divider {
    padding-top: 8px;
    background-color: transparent;
    vertical-align: baseline;
  }
  min-width: 370px;
  
  
  
  `}  
</style>
    </>
}

export default kicker