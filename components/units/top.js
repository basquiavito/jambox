import Label from './label'
import Title from './title'
import Dekk from './dekk'
import Authordate from './authordate'
import ImageHolder from './imageHolder'
 import Link from 'next/link'


export default function top(){
    return <>

<Link href="/editorial/mainHeadline"><a><Label label="featured"/>
<Title title="K-Pop Stars Acknowledge Black Culture’s Influence On Their Music In Solidarity With Protests"/>
<Dekk dekk="Meanwhile, K-pop fans are flooding hashtags and police department apps in support of Black Lives Matter." />
<Authordate author="Jonathan Castillo" date="06/20/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/MJ+last+Shot.jpeg"/>
        </a></Link>    

      

    </>

}

