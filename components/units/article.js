import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
 import Author from '../units/authordate'
 


 export default function Post() {
  
    return (
      < >
      
           <Head>
           <title>ok</title>
   <meta property="og:image" content=""></meta>
   <meta property="og:description" content=""></meta>
   <meta property="og:title" content=""></meta>
   <meta http-equiv="content-language" content="en-us"></meta>
  <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@h00pscript" />
    <meta name="twitter:creator" content="@h00pscript"/>
    <meta property="twitter:description" content=""/>
    <meta property="twitter:domain" content="https://www.hoopscript.com"></meta>
    <meta property="og:url" content="" />
    <meta property="twitter:title" content=""></meta>
      <meta name="twitter:image:src" content="" />
      <meta property="og:image" content=""/>
      
        </Head>
   
        <article>
        <div className={styles.whiteContainer}>
        <div className={styles.gridLayout}>
  <div className={styles.layoutFull}>
  <h1 className={styles.articleTitleOutline}>
   
ok
  </h1>
  
  
   
  <div className={styles.articleHero}>
  <div className={styles.articleHeroBckGrndImage}>
   
     
        <Image
          src=""
          alt="Picture of the player"
          width="1140px"
          height="641px"
        />
         
  
  </div>
  </div>
  <br/>
  <SocialMedia id=""/>
  <Byline author="Richard Clemons" date="Jan 25, 2021"/><br/>
  <div className={styles.dataArticleHero} ></div>
  
  <div className={styles.gridLayoutBody}>
  <div className={styles.dekkContainer}>
    <h2 className={styles.articleDekk}>
   Wow 
    </h2>
  </div>
  
  
  
  <div className={styles.richTextFormatting}>
  <p><a href="" rel="noopener" data-api_path="/artists/139478">Doja Cat</a> is <a href="https://genius.com/a/everything-we-know-about-doja-cat-s-new-album-planet-her-features-tracklist-release-date-cover-art-producers" rel="noopener" data-api_path="/articles/12329">starting to initiate the rollout of her new album, <em>Planet Her</em></a>, but a song from 2019’s <a href="https://genius.com/albums/Doja-cat/Hot-pink" rel="noopener" data-api_path="/albums/540962"><em>Hot Pink</em></a> is taking on a life of its own. <a href="https://genius.com/Doja-cat-streets-lyrics" rel="noopener" data-api_path="/songs/4989568">“Streets”</a> was originally meant as an album cut, but has racked up nearly 60 million Spotify streams and recently made its Hot 100 debut thanks to a TikTok trend. The track kicks off with a smooth R&amp;B sample taken from <a href="https://genius.com/artists/B2k" rel="noopener" data-api_path="/artists/8387">B2K</a>’s 2003 soundtrack for the film <em>You Got Served</em>.</p>
  
  <p></p>
  
  <div className={styles.preview}>
   <iframe className={styles.iframeSongEmbed} src="https://embed.music.apple.com/us/song/1486263368" allow="encrypted-media" width="100%" height="120">
    </iframe> 
  </div>
  
  <p>Genius user <a href="https://genius.com/rihannas" rel="noopener" data-api_path="/users/4270803">rihannas</a> breaks down the sample in an annotation:</p>
  <p></p>
  
  <div className={styles.preview}>
  <iframe className={styles.iframeImage} src="" width="500px" height="200px" id="iFrameResizer0" scrolling="no"  ></iframe>
  
  </div>
  
  <p>TikTok users utilize the song, along with a vocal snippet of Nicki Minaj saying, “I don’t think you understand, I’m obsessed,” to soundtrack videos about their crushes and obsessions. Well over 100,000 videos using the song now exist on the platform:</p>
  <p></p>
  
  <div className={styles.previewVideo}>
  <iframe type="text/html" width="640" height="390" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/0hD-Z1q_ZyI?modestbranding=1&amp;start=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=hooperos.com"></iframe>
  
  </div>
  
  <p>The newfound interest helped “Streets” debut at No. 91 on the Billboard Hot 100 chart this week, marking the fourth <em>Hot Pink</em> song to chart after <a href="https://genius.com/Doja-cat-say-so-lyrics" rel="noopener" data-api_path="/songs/4989524">“Say So,”</a> <a href="https://genius.com/Doja-cat-and-tyga-juicy-lyrics" rel="noopener" data-api_path="/songs/4671874">“Juicy,”</a> and <a href="https://genius.com/Doja-cat-like-that-lyrics" rel="noopener" data-api_path="/songs/4989513">“Like That.”</a> Other <em>Hot Pink</em> tracks like <a href="https://genius.com/Doja-cat-cyber-sex-lyrics" rel="noopener" data-api_path="/songs/4989515">“Cyber Sex,”</a> <a href="https://genius.com/Doja-cat-rules-lyrics" rel="noopener" data-api_path="/songs/4967676">“Rules,”</a> and <a href="https://genius.com/Doja-cat-bottom-bitch-lyrics" rel="noopener" data-api_path="/songs/4885846">“Bottom B-tch”</a> have also gotten music videos and single pushes, showcasing the album’s remarkably long legs well over a year after it dropped.</p>
  
  <p><a href="https://genius.com/Doja-cat-streets-lyrics" rel="noopener" data-api_path="/songs/4989568">Read all the lyrics to Doja Cat’s “Streets”</a> and <a href="https://genius.com/B2k-streets-is-callin-lyrics" rel="noopener" data-api_path="/songs/1275462">B2K’s “Streets is Callin'”</a> on Genius now.</p>
  
  <blockquote className={styles.lyricstag}>
    
      <div class="referent referent--white">
        My b-tch is Mello Yello like a soda (Soda)
      </div>
    
  </blockquote>
  
  
  
  </div>
  </div>
  </div>
  
        </div>
  
  
  
         </div>
  
      
       
  
        
           
        
  
  
   <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
   
   
   
  </article>
  
   
  
  <style jsx>
      {`
  blockquote {
    quotes: none;
  }
      `}
  </style>
      </ >
    )
  }
 
