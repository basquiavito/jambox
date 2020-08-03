import axios from 'axios'
import ArticleSummary from '../components/Article/ArticleSummary'
import baseUrl from '../utils/baseUrl'
 


function Article({ articles }) {
 
  return (
  
  <>
  <ArticleSummary {...articles}/>

  </>
  )
}

Article.getInitialProps = async ({ query: { _id } }) => {
const url = `https://hoopscript.vercel.app/api/article`;
const payload = { params: { _id }}
const response = await axios.get(url, payload)
return {articles: response.data}
 
}

export default Article;