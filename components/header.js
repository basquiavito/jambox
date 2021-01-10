import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

const Header = () => (
    <header className="header">
        <SearchBox
            className="search-bar"
            translations={{placeholder: 'Search for Movies'}}
        />
    </header>
)