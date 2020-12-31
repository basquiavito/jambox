import { Card } from 'semantic-ui-react'

 
export default function ArticlesList({ articles}) {
    function mapArticlesToItems(articles){
    return articles.map(p => ({
    header: p.title, 
    image:`http://i.ytimg.com/vi/${p.value}/hqdefault.jpg`,
    childkey: p._id,
    href:`/article?_id=${p._id}`,
    meta: p.date,
    color:'teal',
    fluid: true,
      
    }));
     
     }
     
     return <><Card.Group fluid  textAlign="center" stackable centered itemsPerRow="3"   items={ mapArticlesToItems(articles)} />
    
     
    
 
    
     
      </>
    }
     