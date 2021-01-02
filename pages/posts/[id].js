import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
  import SocialMedia from '../../components/units/socialMedia'
import Byline from '../../components/units/byline'
import utilStyles from '../../static/layout.module.css'
import HyvorTalk from 'hyvor-talk-react'
import ImageHolder from '../../components/units/imageHolder'
import Wshhtitle from '../../components/units/wshhtitle'
 
  const main = {
  
 
  padding: '0.5rem',
    backgroundColor :'#f7f7f3'
  }


export default function Post({ postData }) {
  // const twitter = (<Twitter tweet={postData.tweet}/>)
 
  return (
    < >
    <main style={main}>
         <Head>
        <title>{postData.title}</title>
      </Head>
      <article>

      <Wshhtitle title={postData.title} />
      <ImageHolder
        mediaUrl=  {postData.image}
        alt="Picture of the author"
        width="100%"
        height="auto"
      />
  

      <Byline author={postData.author} date={postData.date}/>
         
      <SocialMedia /><br/>


 <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
 
 
 <div>
 

       <div className="comment-count-view">

         { /* Comment Counts */ }
         <HyvorTalk.CommentCount 
           websiteId='1313'
           id={postData.id}
         />

       </div>


       { /* Load Comments now */ }
       <HyvorTalk.Embed 
         websiteId='1313'
         id={postData.id}
       />
     </div>
</article>

</main>

<style jsx>
    {`
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