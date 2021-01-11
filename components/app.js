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
      <img alt={hit.player} width="100%" height="100%" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img> 

  <h3>{hit.player} {hit.team} {hit.hoopcode}</h3> 
  

      </a>   </section>
  <style jsx>
  {`


h3 {
  font-weight: 600;
  font-size: 1.1666em;
  line-height: 1.2307em;
  margin: 15px 0 10px;
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
        .pageGrid{
          display: grid;
          -webkit-box-pack: center;
          justify-content: center;
          grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
          grid-row-gap: 30px;}
          
          .gridCenter{
            grid-column: center-start / center-end;
         }
        
        
        `}
      </style>
    </>;
  }
}