import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import SectionTitle from './sectionTitle'
const Bio = (props) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
 

  const url =
    `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${props.query}`;

  const extractAPIContents = (json) => {
    const { pages } = json.query;
    return Object.keys(pages).map(id => pages[id].extract);
  }

  const getContents = async () => {
    let resp;
    let contents = [];
    setLoading(true);
    try {
      resp = await fetch(url);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, []);

  if (loading) return 'Loading ...';
  if (error) return 'An error occurred';
  return (
    <div className="wikiepdia">
     <SectionTitle title="Wikipedia" />
      {contents.map(content => <div dangerouslySetInnerHTML={{ __html: content }} />)}
<style jsx>
  {`
  .wikiepdia{
    border: 1px solid #d00;
 
   
    margin-bottom: 3rem;
    padding: 1rem;
  }
  
  `}
</style>
    
    </div>
  )
};

export default Bio