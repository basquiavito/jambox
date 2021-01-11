import {   SearchBox } from 'react-instantsearch-dom';


const Header = () => {
    return <>


    <header className="header">
        <SearchBox
            className="search-bar"
            translations={{ placeholder: 'Search for Plays' }}
        />
    </header>
<style jsx>
{`
 



`}    
</style>

    </>
   
};

export default Header