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
 
<Title title="PELICANS at NETS | SCRIMMAGE HIGHLIGHTS | July 22, 2020”"/>
<Dekk dekk="In their first NBA scrimmage in Orlando, the New Orleans Pelicans defeated the Brooklyn Nets, 99-68. Brandon Ingram led the Pelicans with 12 PTS in the victory, while Caris LeVert and Jarrett Allen each tallied 10 PTS for the Nets."/>
<Authordate author="Franqui Clemons" date="Jul 20, 2020" />
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/srimmage.png"/>

</a></Link>
 <style jsx>
{`
a{
    color: #fff;
    text-decoration: none;
}


`}
 </style>

    </>
}