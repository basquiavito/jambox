import React from 'react';
import Head from 'next/head'

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
  <div className="hit">
    <div className="hit-content">
      <div>
       <Link href={`https://www.hoopscript.com/profile?_id=${hit._id.$oid}`}><a  >
       <span id> {hit. name}</span>
       <span id="lastname">  {hit.lastname}  </span>
       <span id="team">  {hit.team}  </span>
     
   <Highlight attribute="name" hit={hit} />      </a></Link> 
     
 
      </div>
      <div className="hit-type">
        <Highlight attribute="team" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={hit} />
      </div>
    </div>


<style jsx>
  {`
  
  #team{
     color:#e41224;
     border: 2px solid transparent;

  }
  span {
    color: #000;
  }


  .results {
    flex: 1;
  }
  
  .hit {
    display: flex;
    align-items: center;
  }
  
  .hit-actions {
    display: flex;
  }
  
  .hit-content {
    padding: 0px 10px;
  }
  
  
  
  .hit-type {
    color: #888888;
    font-size: 13px;
  }
  


  `

  }
</style>

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
    <Head>

    
    
    
    </Head>
      <InstantSearch
        searchClient={this.props.searchClient}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
        indexName={this.props.indexName}
        onSearchParameters={this.props.onSearchParameters}
        {...this.props}
      >
        <Configure hitsPerPage={12} />
        <header>
          <h1 className="title"> NBA ACTIVE PLAYERS</h1>
          <SearchBox /><br/>
        </header>
        <main>
          <div className="pageGrid">
            <div className="gridCenter">
            <div className="menu">
            <RefinementList attribute="categories" />
          </div>
          <div className="results">
            <Hits hitComponent={HitComponent} />
          </div><br/>
   
        <footer>
          <Pagination />
        
        </footer>
            </div>
          </div>     </main>
          
      </InstantSearch>
<style jsx>{`
html {
  font-family: sans-serif;
}

header {
  display: flex;
  flex-direction: column;
  margin: 16px;
 
}
header > h1 {
  text-align: center;
}
main {
  padding: 10px;
  background-color :#f7f7f3;
  display: flex;
   
}

.menu {
  flex: 1;
}
 span {
   color:#f7f7f3;
 }
footer {
  text-align: center;
}

.ais-Pagination {
  margin-bottom: 25px;
}

.results {
  flex: 1;
}

.hit {
  display: flex;
  align-items: center;
}

.hit-actions {
  display: flex;
}

.hit-content {
  padding: 0px 10px;
}



.hit-type {
  color: #888888;
  font-size: 13px;
}

 
  .pageGrid{

    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;
}

.gridCenter {
  grid-column: center-start / center-end;
}

h1 {
  color:#e41224; 
}
`}</style>
      
    </>;
  }
}
