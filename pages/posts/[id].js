import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
  import SocialMedia from '../../components/units/socialMedia'
import Byline from '../../components/units/byline'
import utilStyles from '../../static/layout.module.css'
import HyvorTalk from 'hyvor-talk-react'
import ImageHolder from '../../components/units/imageHolder'
import Wshhtitle from '../../components/units/wshhtitle'
 import Sectiontitle from '../../components/units/sectiontitle'
import Image from 'next/image'
 
const main = {
  maxWidth:'37rem',
  padding:'1.5rem',
  margin:'auto'
}

 


export default function Post({ postData }) {
  
  return (
    < >
    
         <Head>
         <title>{postData.title}</title>
 <meta property="og:image" content={postData.image}></meta>
 <meta property="og:description" content={postData.title}></meta>
 <meta property="og:title" content={postData.title}></meta>
 <meta http-equiv="content-language" content="en-us"></meta>
<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@h00pscript" />
  <meta name="twitter:creator" content="@h00pscript"/>
  <meta property="twitter:description" content={postData.comment}/>
  <meta property="twitter:domain" content="https://www.hoopscript.com"></meta>
  <meta property="og:url" content={`https://hoopscript.com/post/${postData.id}`} />
  <meta property="twitter:title" content={postData.title}></meta>
    <meta name="twitter:image:src" content={postData.image} />
    <meta property="og:image" content={postData.image}/>
    
      </Head>
      <main style={main}>
      <article>

      <Wshhtitle title={postData.title} />
      <div className="imageContainer" >
<picture>
   
      <Image
        src={postData.image}
        alt="Picture of the player"
        width="310px"
        height="310px"
      />
      </picture>
     </div>

      <Byline author={postData.author} date={postData.date}/>
         
      <SocialMedia id={postData.id}/><br/>


 <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
 <div className="hoopcode">
<span className="section">
<Sectiontitle title={postData.affiliation} />
  </span>
</div>
<br/>
 
</article>

</main>

<style jsx>
    {`

    `}
</style>
    </ >
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
} 