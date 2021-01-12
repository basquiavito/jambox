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
import Sectiontitle from '../components/units/sectiontitle'
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
        
      </div><br/>
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
 <div id="id">
<Sectiontitle title="Pick Up League Ready"></Sectiontitle> <br/>
   <section>
<h3>Diamonds </h3>

  <Mixtape  
  latest1Title="801 Pop Cross      " 
  latest1="YD3wOwJvmIw"
  
  latest2Title="802 Pop Back    " 
  latest2="s5rh63zbcyE"
  
  latest3Title="803 Pop 'Tween    " 
  latest3="s5rh63zbcyE"

  latest4Title="804 Pop Reverse    " 
  latest4="s5rh63zbcyE"

  latest5Title="805 POPIAO    " 
  latest5="s5rh63zbcyE"

  latest6Title="806 Step-Back Grit    " 
  latest6="s5rh63zbcyE"

  latest7Title="807 Spin Grit    " 
  latest7="s5rh63zbcyE"

  latest8Title="808 Stride     " 
  latest8="s5rh63zbcyE"

  latest8Title="809 ShammGod    " 
  latest8="s5rh63zbcyE"
  />
</section>
  <section>
<h3>Connectors</h3>
  <Mixtape
  latest1Title="031 Utep Two Step      " 
  latest1="YD3wOwJvmIw"
  
  latest2Title="013 Smoke    " 
  latest2="s5rh63zbcyE"
  
  latest3Title="022 Ducking    " 
  latest3="s5rh63zbcyE"

  latest4Title="011 Double Cross    " 
  latest4="s5rh63zbcyE"

  latest5Title="518 Rep    " 
  latest5="s5rh63zbcyE"

  latest6Title="343 Jake     " 
  latest6="s5rh63zbcyE"

  latest7Title="434 Enroque    " 
  latest7="s5rh63zbcyE"

  latest8Title="131 Hardening    " 
  latest8="s5rh63zbcyE"

  latest8Title="313 Utop    " 
  latest8="s5rh63zbcyE"
  
  
  
  />
  </section>
<section>
  <h3>Pull Ups</h3>
  <Mixtape/>
  </section>
<section>
  <h3>Turnaround, Fadeaway</h3>
  <Mixtape/>

  </section>

  <section>
  <h3>Nice Layups</h3>
  <Mixtape/>

  </section>

  <section>
  <h3>Dunks, Alley Oops</h3>
  <Mixtape/>

  </section>
  </div>
 <style jsx>
   {`
   h3 {
     margin-bottom: 0;
     color: rgb(228, 18, 36);
   }
   section{ margin-bottom: 2rem;
   
    h
   `}
 </style>
    </>;
  }
}

export default withRouter(Page);
