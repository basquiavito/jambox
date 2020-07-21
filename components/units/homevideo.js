import Blacklabel from './blackLabel'
import Title from './title'
import Dekk from './dekk'
import Authordate from './authordate'
import MediaUrlFull from './mediaUrlFull'
import BlackSectiontitle from './blackSectionTitle'
import Sectionsubtitle from './sectionsubtitle'
import Link from 'next/link'


export default function Homevideo(){
    return<>
    <Link href="/videos/video"><a className="linkContainer">

<Blacklabel label="Fadeaway"/>
 
<Title title="MJ vs Kobe: Who got the best fadeaway ever?"/>
<Dekk dekk="Genius News took a look at the evolution of Kid Cudi's sound"/>
<Authordate author="Franqui Clemons" date="Jul 20, 2020" /></a></Link>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg"/>


 <style jsx>
{`
a {
    color: #fff;
    text-decoration: none;
}


`}
 </style>

    </>
}