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

const aisInstantSearch = {
  maxWidth: '960px',
  overflow: 'hidden',
  margin: '0 auto'
}

const leftPanel = {
 
  width: '250px'
}

const rightPanel = {
 maxWidth: '500px'
}


const hitName=  {
  marginBottom: '0.5em'
}


const hitDescription = {
  color: '#888',
    fontSize: '14px',
    marginBottom: '0.5em'
}

const hitPrice  = {

}
class App extends Component {
  render() {
    return (
      <div style={aisInstantSearch} >
        <InstantSearch indexName="vito" searchClient={searchClient}>
          <div style={leftPanel} >
            <ClearRefinements />
            <h2>Players</h2>
            <RefinementList attribute="player"  />
            <Configure hitsPerPage={8} />
          </div>
      
          <div style={rightPanel}>
            <SearchBox />
            <br/>
            <Hits hitComponent={Hit} />
            <br/>
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return <>
  <head>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
    />

  </head>
    <div>
      <Link href={props.hit.link}><a>
    <div className="imageContainer" >
<picture className="">
<Image
src={props.hit.mediaUrl}
alt={`A photo of ${props.hit.player}`}
width="100px"
height="100px"
 
className="imagen"
/></picture></div>
      <div style={hitName} >
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div style={ hitDescription } >
        <Highlight attribute="player" hit={props.hit} />
      </div>
      <div className="team">{props.hit.team}</div>
      </a></Link>
    </div>
    
    
  </>;
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
