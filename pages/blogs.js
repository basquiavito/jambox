 
 
import utilStyles from '../static/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Label from '../components/units/label'
 const a = {
  color: '#000',
  textDecoration: 'none'
 }
const main = {
  maxWidth: '38rem',
  padding: '2rem',
  margin: 'auto',
 
}

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
   
 
 


      <section style={main} className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><Label label="Articles"/></h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author  }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href="/posts/[id]" as={`/posts/${id}`}>
             
             <a style={a}>{title}</a>
            
           </Link>

          
  
           <br />
           <small className="lightText">
             <p>{date}</p> 
           </small>


           
         </li>
     
          ))}
        </ul>

      
      </section>
      
 
  )
}