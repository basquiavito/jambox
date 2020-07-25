import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import HyvorTalk from 'hyvor-talk-react'

export default function Post({ postData }) {
  return (
    <Layout>
         <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
 
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
   <Date dateString={postData.date} />
 </div> 
 <div><img src={postData.resource_files}/></div>

 <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
</article>
<div>
       

        <div className="comment-count-view">

          { /* Comment Counts */ }
          <HyvorTalk.CommentCount 
            websiteId='1313'
            id='999'
          />

        </div>
       

        { /* Load Comments now */ }
        <HyvorTalk.Embed 
          websiteId='1313'
          id='999'
        />
      </div>

    </Layout>
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