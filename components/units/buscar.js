import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination } from 'react-instantsearch-dom';
 import Head from 'next/head'
import HitHeader from './hitHeader'
import Content from './content'
import Hit from './hit'
 
const searchClient = algoliasearch(
    'JJQ6W5JZEV',
     '5fa378bc2862d01482c0b8537c171acc'
  );




function Search() {
 

    return <>
 
        < InstantSearch searchClient={searchClient} indexName="profiles" >
            <HitHeader />
            <div className="body-content">
                <Content/>
            </div>
        </InstantSearch >
        <style jsx>
            {`
         .body-content {
       
            
         }
            
            
            `}
        </style>
    </>;        
};
 
 
 
export default Search;
