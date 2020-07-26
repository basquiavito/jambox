 
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination} from 'react-instantsearch-dom'
import Head from 'next/head'


const searchClient = algoliasearch('JJQ6W5JZEV', "5fa378bc2862d01482c0b8537c171acc")




function Search () {            
        return <>
 
   <Head>
   <link rel="stylesheet" href="/static/algolia.css" />
       
       </Head>     
<InstantSearch searchClient={searchClient} indexName="profiles" >>
<Header />
            <div className="body-content">
                <Content/>
            </div>
</InstantSearch>


        </>

          
}
const Header = () => (
    <header className="header">
        <SearchBox
            className="search-bar"
            translations={{ placeholder: 'Search for players' }}
        />
    </header>
);


const Hit = ({ hit }) => (
    <a href={"/"} >
        <div className="card">
            <div className="card-image">
                <img src={hit.image} alt={hit.name} className="image"/>
            </div>
            
        </div>
    </a>
);

const Content = () => (
    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
            <div className="">
                <SortBy defaultRefinement="name"
                    items={[
                        { value: 'name', label: 'Most Relevant' },   
                    ]}
                />
            </div>
        </div>
        <Hits hitComponent={Hit} />
        <div> <Pagination/></div>
    </main>

    
);

export default Search;