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
import { Label } from 'semantic-ui-react';
 
 

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
 .hits, .refine, .searchbox {
   min-width: 375px;
   max-width: 38rem;
   padding: 1rem;
   margin: auto;
   
 }


        
  
 
     `}
      </style>
    </>
  }
}
 
function Hit(props) {
  return <>
 
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
 .hoopcode {
  color: #e41224;
 }
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
