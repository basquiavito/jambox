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
<head>
<link
   async
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
     ></link> 


</head>

    <div  className="hit">
 <section className="ais-Hits-items">
      <a className="unit" href={hit.link}>
  {hit.player} {hit.hoopcode} {hit.team} 
  <picture>
  <img alt={hit.player} width="100%" height="100%" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img> 
  </picture>
      </a>   </section>
  <style jsx>
  {`
 .hit {
   
  color: #1d1d1f;
  font-style: normal;
  letter-spacing: -.022em;
  font-weight: 400;
   display: flex;
   justify-content: center;
   font-family: "Helvetica Neue", helvetica, arial,sans-serif;
   line-height: 1.47059;
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
        <Configure hitsPerPage={10} />
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
main {
  max-width: 38rem;
  padding: 1.5rem;
  margin: auto;
}
        .results {
          text-align: center;
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