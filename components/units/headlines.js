import Label from './label'
import Title from './title'
import Authordate from './authordate'
import ImageHolder from './imageHolder'
import Link from 'next/link'
import Dekk from './dekk'
import Maintitle from './maintitle'


export default function headlines(){
    return <>
<Link href="/posts/exodus"><a className="editorialPlacementLink">
<div className="editorialPlacementHeader">
<Label label="Headlines"/>
<Maintitle title="PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”"/>
<Dekk dekk="In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets."/>
<Authordate author="NBA" date="07/22/20"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/srimmage.png"/>
 


</div></a></Link>

    

<Link href="/posts/genesis"><a>
<Label label="Prime"/>
<ImageHolder mediaUrl="https://s3.amazonaws.com/pedales.net/kobewallace.jpg"/>
<Title title="What’s Up Next: Here’s Every Album Dropping In June"/>
<Authordate author="Jay Flemmings" date="06/14/20"/>

    </a></Link>

    <Link href="/posts/matrix"><a>
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

