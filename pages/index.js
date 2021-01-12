import { isEqual } from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import qs from 'qs';
import algoliasearch from 'algoliasearch/lite';
import { findResultsState } from 'react-instantsearch-dom/server';
import { Head, App } from '../components';
import Link from 'next/link'
import Spotlight from '../components/units/spotlight'
import Video from '../components/units/mediaUrlFull'
import mediaUrlFull from '../components/units/mediaUrlFull';
import Mixtape from '../components/units/mixtape'

const searchClient = algoliasearch(
  'JJQ6W5JZEV',
  '5fa378bc2862d01482c0b8537c171acc'
);

const updateAfter = 700;

const createURL = state => `?${qs.stringify(state)}`;

const pathToSearchState = path =>
  path.includes('?') ? qs.parse(path.substring(path.indexOf('?') + 1)) : {};

const searchStateToURL = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : '';

const DEFAULT_PROPS = {
  searchClient,
  indexName: 'profiles',
};

class Page extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    resultsState: PropTypes.object,
    searchState: PropTypes.object,
  };

  state = {
    searchState: this.props.searchState,
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    const resultsState = await findResultsState(App, {
      ...DEFAULT_PROPS,
      searchState,
    });

    return {
      resultsState,
      searchState,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(state.lastRouter, props.router)) {
      return {
        searchState: pathToSearchState(props.router.asPath),
        lastRouter: props.router,
      };
    }

    return null;
  }

  onSearchStateChange = searchState => {
    clearTimeout(this.debouncedSetState);

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      this.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    this.setState({ searchState });
  };

  render() {
    return <> 
      <div>
        <Head></Head>
        <div className="title">
<h1>Trending Basketball</h1>
</div>

{/* <p className="image">
<img src="https://hooperos.s3.us-east-2.amazonaws.com/tables/hoopbanner.jpg" alt="" />
</p> */}

<Link href="https://hoopscript.com/article?_id=5ffa9cccfeaebf363eaf659d" >
  <a> <Spotlight 
 title="Lamelo Ball" 
 id="bMzpGpSUqWE" 
 date="Jan 9, 2021"
 length="4:44 minutes"
 graf="Lamelo Ball first tripple Double."
 /> 
  </a></Link> 

        <App
          {...DEFAULT_PROPS}
          searchState={this.state.searchState}
          resultsState={this.props.resultsState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={createURL}
        />
        
      </div>
      <style jsx>
        {`
        img {
          border: 0;
          vertical-align: top;
          max-width: 100%;
        
        }
         
        .title:after {
          display: block;
            content: ".";
            clear: both;
            font-size: 0;
            line-height: 0;
            height: 0;
            overflow: hidden;
        }
        .title {
          position: relative;
        }
        h1 {
          min-height: 1.3125em;
        }
        
        `}
      </style>
 
  <Mixtape 
  latest1Title="LaMelo Ball 8 Pts 7 Ast 14 Reb      " 
  latest1="YD3wOwJvmIw"
  
  latest2Title="CJ McCollum Hits GAME-WINNER!    " 
  latest2="s5rh63zbcyE"
  
  latest3Title="CJ McCollum Hits GAME-WINNER!    " 
  latest3="s5rh63zbcyE"

  latest4Title="CJ McCollum Hits GAME-WINNER!    " 
  latest4="s5rh63zbcyE"

  latest5Title="CJ McCollum Hits GAME-WINNER!    " 
  latest5="s5rh63zbcyE"

  latest6Title="CJ McCollum Hits GAME-WINNER!    " 
  latest6="s5rh63zbcyE"
  />
 
    </>;
  }
}

export default withRouter(Page);
