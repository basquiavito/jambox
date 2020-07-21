import Blacklabel from './blackLabel'
import Title from './title'
import Link from 'next/link'
import Authordate from './authordate'
import MediaUrlFull from './mediaUrlFull'
 





export default function videoSub(){
    return<>
<section>
    <Link href="/videos/video1"><a>
    <Blacklabel label="Hoopcodes"/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title="MJ vs Kobe: Who got the best fadeaway ever? "/>
<Authordate author="Richard Clemons" date="Jul 21, 2020" />
        </a></Link>

<Link href="/videos/video2"><a>
<Blacklabel label="Hoopcodes"/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title="When A 6'1 Rookie Out Of Nowhere Score 55 Points"/>
<Authordate author="Jason Andujar" date="Jul 22, 2020" />
    </a></Link>

<Link href="/videos/video3"><a>
<Blacklabel label="Hoopcodes"/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title="100 Crossover: Allen Iverson Sickest Mixtape"/>
<Authordate author="Austin Smith" date="Jul 21, 2020" />
    </a></Link>

<Link href="/videos/video4"><a>
<Blacklabel label="Hoopcodes"/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title="Would you jump if Prime Vince Carter is about to dunk? Think twice"/>
<Authordate author="Jay Alvaredo" date="Jul 30, 2020" /></a>

</Link>

</section>
    </>
}