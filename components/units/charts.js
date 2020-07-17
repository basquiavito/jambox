import Coderow from './coderow'
import Link from 'next/link'
import Sectiontitle from './sectiontitle'
import Sectionsubtitle from './sectionsubtitle'

  function charts(){
    return(
        <>


        <Sectiontitle title="Charts" />
        <Sectionsubtitle subtitle = "Top Hoopcodes" />
<Link href=""><a href="http://localhost:3000/hoopcode?_id=5eb5ea710f258495bf4845ca">
<Coderow rank="1" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" /></a></Link>



<Link href=""><a><Coderow rank="2" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" /></a></Link>
<Link href=""><a><Coderow rank="3" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" /></a></Link>
<Link href=""><a><Coderow rank="4" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" /></a></Link>
<Link href=""><a><Coderow rank="5" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" /></a></Link>
        </>
    )
}

export default charts