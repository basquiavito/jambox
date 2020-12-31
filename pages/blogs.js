 
 
import utilStyles from '../static/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
// import Date from '../components/date'
// import Label from '../components/label'
 


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function blog({ allPostsData }) {
  return (
   
 
 


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
     <h2 className={utilStyles.headingLg}></h2> 
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href="/posts/[id]" as={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             {/* <Date dateString={date} /> */}
           </small>


           
         </li>
     
          ))}
        </ul>

      
      </section>
      
 
  )
}