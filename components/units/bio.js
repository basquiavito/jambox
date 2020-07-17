 
import React, { useState, useEffect } from "react";
import Sectiontitle from './sectiontitle'
import Link from 'next/link'



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
    <a className="" href={props.wikiLink}><div className="wikiepdia">
 
      {contents.map(content => <div dangerouslySetInnerHTML={{ __html: content }} />)}
<style jsx>
  {`
  .wikiepdia{

    font-size: 19px;
 line-height: 1.4738442105;
 margin-top: 1rem;
  margin-bottom: 2rem;
    padding: 1rem;
    color: #fff;
    background-color: #4183c4;
    letter-spacing: .018em;
    font-weight: 300;
  }
  
  `}
</style>
    
        </div></a>
  )
};

export default Bio