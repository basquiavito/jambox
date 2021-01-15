import { Card } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'
import 'semantic-ui-css/semantic.min.css'
 
export default function ArticlesList({ articles}) {
    function mapArticlesToItems(articles){
    return articles.map(p => ({
    header: p.title, 
    image:`http://i.ytimg.com/vi/${p.value}/hqdefault.jpg`,
    childkey: p._id,
   description: p.hoopcode,
    href:`/article?_id=${p._id}`,
    meta: p.date,
    color:'teal',
    fluid: true,

      
    }));
  
     }
     
     return <>
    <head>

    </head>
     <Card.Group fluid  textAlign="center"   centered itemsPerRow="2"   items={ mapArticlesToItems(articles)} />
    
     
    
 
    
     
      </>
    }