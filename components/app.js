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
  margin: '0 auto',
  fontSize: '19px',
  lineHeight:'28px'

}

const leftPanel = {
 
  width: '250px'
}

const rightPanel = {
 maxWidth: '500px'
}


const hitName=  {
color: 'rgb(228, 18, 36) '
}

const hitNamex=  {
  color: 'rgb(18, 18, 18)',
  fontWeight: 600,
  textAlign:'center'
   
  }

const hitDescription = {
  fontSize: '19px',
  lineHeight:'28px',


  
}

const hitPrice  = {

}
class App extends Component {
  render() {
    return (
      <div >
        <InstantSearch indexName="vito" searchClient={searchClient}>
          <div  >
            <ClearRefinements />
            <h2>Hoopcodes</h2>
            <RefinementList attribute="hoopcode"  />
            <Configure hitsPerPage={16} />
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
    );
  }
}

function Hit(props) {
  return <>
 
    <div className="main">
      
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
      <div 
      className="team" id="">
      <em>{props.hit.team}</em>
      </div>


      <div 
      className="team">
      {props.hit.hoopcode}
      </div>

      </a>
      
      </Link>
    </div>
    
    <style jsx>
      {`
 
  .main {
    display: flex;
    flex-flow: row wrap;
    justify content: center;
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
