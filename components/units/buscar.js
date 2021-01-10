import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination } from 'react-instantsearch-dom';
 

const searchClient = algoliasearch(
    'JJQ6W5JZEV',
     '5fa378bc2862d01482c0b8537c171acc'
  );

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
            translations={{ placeholder: 'Search for Plays' }}
        />
    </header>
);
const Hit = ({ hit }) => (
    <a href={hit.link} >
        <div className="card">
            <div className="card-image">
                <picture>
            <img alt={hit.player} width="100px" height="auto" src={`http://i.ytimg.com/vi/${hit.mediaUrl}/hqdefault.jpg`}></img> 
            <p>{hit.player}<br/>{hit.team}<br/>{hit.hoopcode}</p>
            <p></p>
            </picture>
            </div>
             <div className="card-contents">                
                <Highlight attribute="player" hit={hit.player} className="card-title" />
                <Highlight attribute="team" hit={hit.team}  className="card-year"/>
 
 
            </div>
        </div>
    </a>
);
const Content = () => (
    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
            <div className="">
                <SortBy defaultRefinement="profiles"
                    items={[
                        { value: 'profiles', label: 'Most Relevant' },   
                    ]}
                />
            </div>
        </div>
        <Hits hitComponent={Hit} />
        <div className="ais-Pagination-list"> <Pagination/></div>

        <style jsx>
            {`
       .header{
        padding-top: 4em;
        width: 100%;
        display: flex;
        background-color: #dce2e9;
        height: 20vh
    }
    .search-bar{
        display: flex;
        justify-content: center;
        width: 100%
    }
    input{
        min-width: 500px;
        border: none;
        border-radius: .5em;
        padding: 15px
    
    }
    .ais-SearchBox-submit{
        width: 100px;
        padding: 15px;
        color: #c4c4c4
    }
    .ais-SearchBox-reset{
        display: none
    }
    main{
        width: 100%;
    }
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap
    }
    li{
        list-style-type: none;
    }
    .ais-Hits-item{
        width: 32%;
    }
    .card{
        background-color: #f9f9f9;
        display: flex;
        border-radius: 10px;
        margin:20px;
        padding: 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .card-contents{
        margin-left: 20px;
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: space-between
    }
    .card-title{
        font-weight: bold
    }
    .card-genre > span{
        font-size: 15px;
        width: 20px;
        padding: 4px;
        background-color: #c4c4c4
    }
    .information{
        padding-top: 10px;
        display: flex;
        justify-content: space-around;
        font-size: 11px
    }
    a{
        text-decoration: none
    }
    a:visited{
        color: black;
    }
    .ais-Pagination-list{
        display: flex;
        justify-content: center
    }
    .ais-Pagination-item{
        margin: 5px
    }
    
            
            `}
        </style>
    </main>
);
export default Search;
