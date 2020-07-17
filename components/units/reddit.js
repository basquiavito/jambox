
import React from 'react'
import SectionTitle from './sectionTitle'
import SectionSubtitle from './sectionSubtitle'

const reddit = () => {
    return(
        <div className="reddit">
<SectionTitle title="Reddit Trends" />
<SectionSubtitle subtitle="Top Commented Post"/>
<div>
<blockquote className="reddit-card" data-card-created="1590241503"><a href="https://www.reddit.com/r/nba/comments/g5psoj/if_ben_simmons_honestly_thinks_he_is_30_shooter/">If Ben Simmons honestly thinks he is 30% shooter from 3 it makes no sense that he’s not attempting any</a> from <a href="http://www.reddit.com/r/nba">r/nba</a></blockquote>
<script async src="//embed.redditmedia.com/widgets/platform.js" charSet="UTF-8"></script></div>



<style jsx>
    {`
    .reddit{
        border: 1px solid #1d4d9f;
        padding: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      
    }
    
    
    
    `}
</style>
        </div>
    )
}
export default reddit