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
<ImageHolder mediaUrl={props.mediaUrl}/><br/>
<Dekk dekk={props.dekk}/>
<Authordate author={props.author} date={props.date}/>
 </main>
<style jsx>

  {`
  min-width: 370px;
  
  
  
  `}  
</style>
    </>
}

export default kicker