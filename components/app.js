import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import Image from 'next/image'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Link from 'next/link'
const searchClient = algoliasearch(
  'JJQ6W5JZEV',
  '5fa378bc2862d01482c0b8537c171acc'
);











const all = {
  listStyleType: 'none'
}

class App extends Component {
  render() {
    return <>
       <head>
      <link rel="stylesheet"    href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset.css"
      
      ></link>

    </head>
      <div style={all} >
        <InstantSearch indexName="vito" searchClient={searchClient}>
          <div  >
            <ClearRefinements />
            <h2>Hoopcodes</h2>

            <div className="refine">
            <RefinementList attribute="hoopcode"  />
            </div>
            <Configure hitsPerPage={5} />
          </div>
      
          <div  >
            <SearchBox />
            <br/>
            <Hits hitComponent={Hit} />
            <br/>
            <Pagination />
          </div>
        </InstantSearch>
      </div>
      <style jsx>
        {`
   
        
        
        `}
      </style>
    </>
  }
}

function Hit(props) {
  return <>
 
    <div >
      
      <Link href={props.hit.link}>
        <a>
    
 
<Image
src={props.hit.mediaUrl}
alt={`A photo of ${props.hit.player}`}
width="327px"
height="218px"
 
className="imagen"
/>
 
 <div   className="team"  >
        <Highlight  attribute="player" hit={props.hit} />
</div>
     


      <div id=""
      className="team">
      {props.hit.hoopcode}
      </div>

      <div 
      className="team" id="dekk">
      <em>{props.hit.team}</em>
      </div><br/>

      </a>
      
      </Link>
    </div>
    
    <style jsx>
      {`

  ul >    li {
        list-style-type: none;
      }
 #dekk {
  color: rgb(85, 85, 85);
  font-family: nyt-imperial;
  font-size: 1rem;
  letter-spacing: normal;
  line-height: 1.375rem;
  margin: 0px;
  padding: 0px;
  transition: color 0.6s ease;
 }
 
 
    
 .team{
  position: relative;
  font-style: normal;
  margin: 0px;
  color: rgb(18, 18, 18);
  text-align: left;
  -webkit-font-smoothing: antialiased;
  font-family: nyt-cheltenham, helvetica;
  font-size: 0.85rem;
  line-height: 1.0625rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  transition: color 0.6s ease;
 }
   
        
      }
      a {
        text-decoration: none;
        color: black;
        text-size-adjust: 100%;
        font: inherit;
        vertical-align: baseline;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
         }
      
      `}
    </style>
  </>;
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
