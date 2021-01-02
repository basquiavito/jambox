import { Card } from 'semantic-ui-react'

 
export default function ArticlesList({ articles}) {
    function mapArticlesToItems(articles){
    return articles.map(p => ({
    header: p.title, 
    image:`http://i.ytimg.com/vi/${p.value}/maxresdefault.jpg`,
    childkey: p._id,
    href:`/article?_id=${p._id}`,
    meta: p.date,
    color:'teal',
    fluid: true,
      
    }));
     
     }
     
     return <><Card.Group fluid  textAlign="center"   centered itemsPerRow="2"   items={ mapArticlesToItems(articles)} />
    
     
    
 
    
     
      </>
    }
     