import Label from './label'
import Title from './title'
import Dekk from './dekk'
import Authordate from './authordate'
import MediaUrlFull from './mediaUrlFull'
import Sectiontitle from './sectiontitle'
import Sectionsubtitle from './sectionsubtitle'



export default function Homevideo(){
    return<>
<Sectiontitle title= "Videos" />
<Sectionsubtitle subtitle= "Top Videos" />
<Label label="Hoopcodes"/>
<MediaUrlFull mediaUrl=" https://s3.amazonaws.com/pedales.net/luka.jpeg" />
<Title title="How Rock Influenced Kid Cudi’s Signature Sound"/>
<Dekk dekk="Genius News took a look at the evolution of Kid Cudi's sound"/>
<Authordate author="Mo" date="Wornajck" />


 

    </>
}