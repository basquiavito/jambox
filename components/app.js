import React from 'react';
 
import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom';
import Link from 'next/link'




const HitComponent = ({ hit }) => (

  <div   className="container">


    <div  className="hit">
 <section className="ais-Hits-items">
      <a className="unit" href={hit.link}>
      <img className="imagen" alt={hit.player} width="100%" height="100%" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img> 

  <h3>
  <span className="player">{hit.player}</span><br/> 
  <span className="team">{hit.team}</span><br/>
  <span className="gem">{hit.hoopcode}</span> </h3> 
  

      </a>   </section>
  <style jsx>
  {`
  .player {
    --type-token-name: discovery.hed-break-out;
    line-height: 1.29em;
    letter-spacing: -.013em;
    font-family: BatonTurbo,helvetica,sans-serif;
    text-decoration: none;
    color: #212121;
    font-weight: 700;
    font-style: normal;
    text-transform: none;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
    background-color: transparent;
    cursor: pointer;
    transition-property: color,background,text-shadow;
  }
  .team {
    text-transform: none;
    font-family: SangBleuRepublic, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: normal;
    line-height: 1.33em;
    font-size: 18px;
    font-weight: 400;
    color: rgb(33, 33, 33);
     
    padding: 1rem 0px;
    text-align: center;
  }
.gem {
  text-transform: none;
    font-family: SangBleuRepublic, helvetica, sans-serif;
    font-style: normal;
    letter-spacing: 0.05em;
    line-height: 1.5em;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    color: rgb(228, 18, 36);
    padding: unset;
 
    max-width: max-content;
}
.imagen {
  text-align: center;
  width: 100%;
}
h3 {
  font-weight: 600;
  font-size: 1.1666em;
  line-height: 1.2307em;
  margin: 15px 0 10px;
  padding: unset;
}
 .hit {
   

  font-style: normal;
 
  font-weight: 400;
   display: flex;
   justify-content: center;
   font-family: "Helvetica Neue", helvetica, arial,sans-serif;
   line-height: 1.47059;
 
   margin: 0 auto;
   position: relative;
   text-align: center;
 }
a {
  display: flex;
  flex-flow: row wrap;
  text-decoration: none;
  width: 100%;
}
a:visited{
    color: black;
}
 
  `

  }
</style>


  </div>

  </div>

);

HitComponent.propTypes = {
  hit: PropTypes.object,
};

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func,
    indexName: PropTypes.string,
    searchClient: PropTypes.object,
  };

  render() {
    return <>
 
      <InstantSearch
        searchClient={this.props.searchClient}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
        indexName={this.props.indexName}
        onSearchParameters={this.props.onSearchParameters}
        {...this.props}
      ><br/>
        <Configure hitsPerPage={12} />
<main>
           <div className="searchBox">


           <SearchBox /><br/>
           </div> 





            <div className="menu">
            <RefinementList attribute="categories" />
          </div>
          <div className="results">
            <Hits hitComponent={HitComponent} />
          </div><br/>

        <footer>
          <Pagination />

        </footer>
            </main> 

      </InstantSearch>

      <style jsx>
        {`
        .results {
          text-align: center;
        
          width: 100%;
          
          flex-flow: row wrap;
          display: flex;
 
 
      
        }
 .searchBox {
 
 
 
 }
       
        
        
        `}
      </style>
    </>;
  }
}