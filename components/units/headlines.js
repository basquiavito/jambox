import Label from './label'
import Title from './title'
import Authordate from './authordate'
import ImageHolder from './imageHolder'
import Link from 'next/link'

export default function headlines(){
    return <>
<Link href=""><a>
<Label label="Headlines"/>

<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/luka.jpeg"/>
<Title title="Genius Presents: The Month In Lyrics (May 2020)"/>
<Authordate author="Monte Williams" date="06/20/20"/>

    </a></Link>

<Link href=""><a>
<Label label="Prime"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobewallace.jpg"/>
<Title title="What’s Up Next: Here’s Every Album Dropping In June"/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>

    <Link href=""><a>
<Label label="Prime"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/>
<Title title="What’s Up Next: Here’s Every Album Dropping In June"/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>


<style jsx>
{`
   a {
       text-decoration: none;
       color: #000;
   } 
    
    
    
    
    
    `}
</style>

    </>

}

