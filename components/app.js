import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import Image from 'next/image'
import Kicker from '../components/units/kicker'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Menu,
 
  Stats
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Link from 'next/link'

 import 'instantsearch.css/themes/algolia.css';
 
 

const searchClient = algoliasearch(
  'JJQ6W5JZEV',
  '5fa378bc2862d01482c0b8537c171acc'
);


class App extends Component {
render() {
return <>
<div>
 
<InstantSearch indexName="vito" searchClient={searchClient}>
<div className="searchbox"  >
<SearchBox
 translations={{
  submitTitle: 'Submit your search query.',
  resetTitle: 'Clear your search query.',
  placeholder: 'Search players or hoopcodes',
}}
/>
   <Stats />
 

</div>
   <br/>     
 <div className="refine">
<b>By Players</b><br/><hr/>
            <RefinementList
             attribute="player"
             showMore={true} 
              translations={{
              showMore(extended) {
                return extended ? '-Less' : '+More';
              }
            }}
             
             />
            </div>
 
          <div  >
      
<br/>
            <div className="refine">
            <b>By Hoopcodes</b>  <hr/>
            <RefinementList
             attribute="hoopcode"
             showMore={true} 
             className="seeMore"
              translations={{
              showMore(extended) {
                return extended ? '-Less' : '+More';
             
              }
            }}
             
             />
             <br/>
                 <div className="filter">
         <ClearRefinements /> 
         </div>

            </div>
            <br/>
            <div className="configure">
            <Configure hitsPerPage={8} />
            </div>
          </div>
      
          <div className="hits"  >
          
          
            <div >
            <Hits hitComponent={Hit} />
            </div>
       
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
 <head>
 <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,500;0,600;0,700;0,900;1,100;1,300;1,700&display=swap" rel="stylesheet"/>

 </head>
    <div className="hits">
      
      <Link href={props.hit.link}>
        <a>
    
 
<Image
src={props.hit.mediaUrl}
alt={`A photo of ${props.hit.player}`}
width="100px"
height="100px"
 
className="imagen"
/>
 
 <div   className="team"  >
<Highlight  attribute="player" hit={props.hit} /> 
</div>
<div className="hoopcode">
        <Highlight attribute="hoopcode" hit={props.hit} />
</div>
     
<div id="dekk">
        <Highlight attribute="team" hit={props.hit} />
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
 
 a {
   text-decoration:  none;
   color: #000;
 }
 
    
 
  
      `}
    </style>
  </>;
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
