import { Card } from 'semantic-ui-react'
 import Head from 'next/head'
 
 
function ArticleList({ articles }) {
function mapArticleToItems(articles){
return articles.map(p => ({
 header: p.title ,
 meta:p.date,
childkey: p._id,
 href:`/article?_id=${p._id}`,
 
  
}));
 
 }
 
 return <>
 
 <Head>
 
 
 
   </Head><br/><br/><br/>  
 <div className="cardCollection">

<Card.Group textAlign="center" stackable  itemsPerRow="1" centered items={ mapArticleToItems(articles)} />

</div>


<style jsx>
 {`

 .back {
   position: absolute;
   top: 90px;
   margin-left: 15px;
 }
 .cardCollection {
   background-color:trasparent;
   display: flex;
   justify-content: center;
 }
 
 
 
 `} 
</style>

 
  </>
}
 
export default ArticleList;
 