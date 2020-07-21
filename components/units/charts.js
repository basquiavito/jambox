import Coderow from './coderow'
import Link from 'next/link'

  function charts(){
    return(
        <>



<Link href="/charts/top"><a><Coderow rank="1" codeTitle="Iverson cross Jordan | Daniels" hoopcodes="013 013 189 FG$" image="https://s3.amazonaws.com/pedales.net/aimovemj.jpg"/></a></Link>
<Link href="/charts/top1"><a><Coderow rank="2" codeTitle="Iverson cross Jordan  " hoopcodes="013 013 189 FG$" image="https://s3.amazonaws.com/pedales.net/jordanShaq.jpg"/></a></Link>
<Link href="/charts/top2"><a><Coderow rank="3" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" image="https://s3.amazonaws.com/pedales.net/kobeShaq.jpg"/></a></Link>
<Link href="/charts/top3"><a><Coderow rank="4" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" image="https://s3.amazonaws.com/pedales.net/luka.jpeg"/></a></Link>
<Link href="/charts/top4"><a><Coderow rank="5" codeTitle="Iverson cross Melo" hoopcodes="013 013 189 FG$" image="https://s3.amazonaws.com/pedales.net/aimovemj.jpg"/></a></Link>

<style jsx>

  {`
  a {
    color: #000;
  }
  
  `}
</style>
        </>
    )
}

export default charts