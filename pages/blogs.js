 
 
import utilStyles from '../static/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Label from '../components/units/label'
import Workhorse from '../components/units/workhorse'

 
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
  return <>
 
<section style={main} className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="headline">Blog</h2>
       

        <h2 className={utilStyles.headingLg}></h2>
        <div className="workHorsePosts">
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author, image, comment }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href="/posts/[id]" as={`/posts/${id}`}>
  
             <a><Workhorse dek={comment} title={title} asset={image} date={date} eyebrows={author}/>   </a>
        
           </Link>

          
  
        
        


           
         </li>
     
          ))}
        </ul>

      </div>
      </section>
      
 <style jsx>
   {`

   .workHorsePosts {
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-pack: center;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   
   }
   .headline {
    -webkit-text-stroke-color: #ff294c;
    -webkit-text-stroke-width: 1px;
    color: transparent;
    margin-left: calc(((100vw - var(--window-width-offset)) - var(--container-width)) / -2);
    margin-right: calc(((100vw - var(--window-width-offset)) - var(--container-width)) / -2);
    padding-left: var(--outer-gutter);
    padding-right: var(--outer-gutter);
    font-family: Maria,sans-serif;
    font-size: 17.86667vw;
    line-height: .80597;
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    margin-bottom: 75px;
   }
 
   
   `}
 </style>
  </>
}