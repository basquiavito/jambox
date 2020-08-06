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
  <div className="pageGrid">
    <div className="gridCenter">


    <div className="hit">
    <div className="hit-content">
      <div className="hits">
        
       <Link href={`https://www.hoopscript.com/profile?_id=${hit._id.$oid}`}><a  >
       <div><span  > {hit. name}</span></div>
       <div><span  >  {hit.lastname}  </span></div>
  </a></Link> </div> </div>
    </div>
  </div>



<style jsx>
  {`
 
 
  
  }
  span {
    color: #e41224;
   
    
     
  }

a {
  text-decoration: none;
 
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
.hit {
  display: flex;
  justify-content: center;
   
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
        <Configure hitsPerPage={16} />
        <header>
          <h1 className="title"><b>Hoopscript</b>NBA</h1>
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
header {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

b {
  color:#e41224;
}
main {
  background-color :#f7f7f3;
  
}
footer {
  text-align: center;
}

.ais-Pagination {
  margin-bottom: 25px;
 
}
.results {
  flex: 1;
  flex-wrap: wrap;
 
 
  }



`}</style>
      
    </>;
  }
}
