import Label from './label'
import Title from './title'
import Authordate from './authordate'
import ImageHolder from './imageHolder'
import Link from 'next/link'
import Dekk from './dekk'
import Maintitle from './maintitle'


export default function headlines(){
    return <>
<Link href=""><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label="Headlines"/>
<Maintitle title="Drake Links Up With Headie One For His Latest UK Drill Song “Only You Freestyle”"/>
<Dekk dekk="Luka doncic es uno de los mas versatiles jugadores que la NBA ha tenido en los ultimos 20 anos."/>
<Authordate author="Monte Williams" date="06/20/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/luka.jpeg"/>
 


</div></a></Link>

    

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
    
   .pageGridFull{
    grid-column: grid-start / grid-end;
   }
    
    .editorialPlacementLink{
        color: inherit;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: inherit; 
    }

    .editorialPlacementHeader{
        margin-bottom: 1rem; 
    }
    
    `}
</style>

    </>

}

