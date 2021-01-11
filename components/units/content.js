import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination } from 'react-instantsearch-dom';
 import Hit from './hit'

const Content = () => {
    return <>



    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
           
        </div>
        <br/>
        <div className="hitting">
        <Hits hitComponent={Hit} />
        </div>
        <br/><br/>
        <div className="ais-Pagination-list"> <Pagination/></div>

       
    </main>
    <style jsx>
        {`
 
         
 
        .hitting {
    
          
       overflow-x: scroll;
 
 
min-width: 500px;
 
 
        }
        
        
        
        `}
    </style>
    </>
};


export default Content