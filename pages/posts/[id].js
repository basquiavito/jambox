import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
  import SocialMedia from '../../components/units/socialMedia'
import Byline from '../../components/units/byline'
import utilStyles from '../../static/layout.module.css'
import HyvorTalk from 'hyvor-talk-react'
import ImageHolder from '../../components/units/imageHolder'
import Title from '../../components/units/title'
 import Sectiontitle from '../../components/units/sectiontitle'
import Image from 'next/image'
  const main = {
  
 
  padding: '0.5rem',
    backgroundColor :'#f7f7f3'
  }



export default function Post({ postData }) {
  
  return (
    < >
    <main style={main}>
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
      <article>

      <Title title={postData.title} />
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


.imageContainer {
  text-align: center;
}
.section {
  align-self: center;
    justify-self: center;
    display: block;
    width: 100%;
}

.hoopcode {
  background-color: #1473e6;
    border-color: #1473e6;
    color: #fff;
    border-width: 2px;
    border-style: solid;
    border-radius: 16px;
    min-height: 32px;
    height: auto;
    min-width: 72px;
    padding: 4px 14px;
    padding-bottom: 4.5px;
    padding-top: 3.5px;
    font-size: 14px;
    font-weight: 700
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;
    overflow: visible;
    margin: 0;
    vertical-align: top;
    transition: background .13s ease-out,border-color .13s ease-out,color .13s ease-out,box-shadow .13s ease-out;
    text-decoration: none;
    font-family: adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;
    line-height: 1.3;
    cursor: pointer;
}
.preamble {
  text-transform: uppercase;
    font-family: BatonTurbo, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 700;
    color: rgb(33, 33, 33);
    word-break: break-word;
    margin: 0px;
}
    .dating {
      text-align: center;
    }
.author {
  text-align: center;
}
    .author > span{
      color: rgb(228, 18, 36);
       
    }
  
    .content {
      margin: 0 auto;
    padding-top: 0.5rem;
    padding-bottom: 2.5rem;
 
    --type-token-name: consumptionEditorial.body-core;
    line-height: 1.71em;
    letter-spacing: normal;
    font-family:sans-serif;
    font-size: 17px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    text-transform: none;
  
    margin-bottom: 1rem;
    width: 100%;

    }
 
  article {
    max-width: 38rem;
  padding: 1.5rem;
  margin: auto; 
  }
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