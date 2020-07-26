import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination } from 'react-instantsearch-dom'
const searchClient = algoliasearch(
    'JJQ6W5JZEV',
    '5fa378bc2862d01482c0b8537c171acc'
  )


  function Search() {

    return (
        < InstantSearch searchClient={searchClient} indexName="profiles" >
            <Header />
            <div className="body-content">
                <Content/>
            </div>
        </InstantSearch >
    );        
};
const Header = () => (
    <header className="header">
        <SearchBox
            className="search-bar"
            translations={{ placeholder: 'Search for Players' }}
        />
    </header>
);
const Hit = ({ hit }) => (
    <a href={"/"} >
        <div className="card">
            <div className="card-image">
                <img src={hit.image} alt={hit.name} className="image"/>
            </div>
             <div className="card-contents">                
                <Highlight attribute="name" hit={hit} className="card-title" />
                <Highlight attribute="lastname" hit={hit}  className="card-year"/>
                <div className="card-rating">Rating: {hit.rating}</div>
                <div className="card-genre"> <span>{hit.genre[0]}</span> <span>{hit.genre[1]}</span> </div>
            </div>
        </div>
    </a>
);
const Content = () => (
    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
            <div className="">
                <SortBy defaultRefinement="lastname"
                    items={[
                        { value: 'lastname', label: 'Most Relevant' },   
                    ]}
                />
            </div>
        </div>
        <Hits hitComponent={Hit} />
        <div> <Pagination/></div>
    </main>
);
export default Search;