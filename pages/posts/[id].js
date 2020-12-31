import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
 import Image from 'next/image'

import utilStyles from '../../static/layout.module.css'
import HyvorTalk from 'hyvor-talk-react'
const a = {
    color: '#e41224',
    textDecoration: 'none'
   }
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
      </Head>
      <article>

      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <img
        src={`http://i.ytimg.com/vi/${postData.image}/hqdefault.jpg`}
        alt="Picture of the author"
        width="100%"
        height="auto"
      />
        <div className={utilStyles.lightText}>
 <div>{postData.date}</div> 
 </div> 


 <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

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
    a {
        color: '#e41224',
        textDecoration: 'none'
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