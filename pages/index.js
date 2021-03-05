import Head from 'next/head'
import Editorial from '../components/units/editorial'
import Codehub from '../components/units/codeHub'
import styles from '../styles/index.module.css'
import FrenchSwap from '../components/units/frenchSwap'
 import Gazzettamia from '../components/units/gazzettaMia'
 import Link from 'next/link'
import Sectiontitle from '../components/units/sectiontitle';
export default function Home(props) {
  return <>
      <Head>
      <meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="google-site-verification" content="3vPt_83gjgDlwNpSwqVFOgiUWnIP-sBphFQVu_wS6q0"/>


    <title>Home - Hooperos.com</title>
    <meta name="description" content="A notation platform for die-hard basketball fans."/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
  <meta name="msapplication-tap-highlight" content="no"/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>  
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <link rel="canonical" href='https://hooperos.com/'/>

  <link rel="shortlink" href="https://www.hooperos.com/" />
  <link rel="dns-prefetch" href="//www.googletagservices.com"></link>
  <link rel="dns-prefetch" href="//www.google.com"/>
  <link rel="dns-prefetch" href="//connect.facebook.net"/>
  <link rel="dns-prefetch" href="//platform.twitter.com"/>
<link rel="dns-prefetch" href="//ajax.googleapis.com"/>
<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://hooperos.com/" />
    <meta property="og:title" content="Home - HOOPEROS.com" />
  <meta property="og:site_name" content="HOOPEROS"/>
    <meta
      property="og:description"
      content="A notation platform for die-hard basketball fans."/>
    <meta name="twitter:site" content="https://twitter.com/hooperos_NBA" />
  <meta name="twitter:creator" content="@hooperos_NBA"/>
  <meta name="twitter:site" content="@hooperos_NBA"/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="" />
    <meta property="og:image" content=""/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
 
      </Head>
 
<br/><br/><br/><br/>
<div id="news">
 <Editorial 
 href="https://hooperos.com/article?_id=6019b8b26a57486615252ebd"
label="news"
title='Lamelo Ball destruye a Milwakee'
dekk="Con 27 puntos y 7 asistencias, Lamelo Ball ayudo a los Hornets pasar a los Bucks.  "
author="Jiffy Hogan"
date="Jan 29 2021"
image="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1610926935/lamelonew_vzo7ge.jpg"
 />

 
 
</div>
<br/><br/>
<Sectiontitle title="Recientes"/>
<div id="latest" className={styles.topHoopcodes}>
<div className={styles.pageGridDesktop}>
<div className={styles.pageGridFull}>
  <div className={styles.homeSection}>
<FrenchSwap 
href="https://hooperos.com/article?_id=6014775844a81254b901ff5a" 
href1="https://hooperos.com/article?_id=6014771544a81254b901ff59"
href2="https://hooperos.com/article?_id=601476d644a81254b901ff58"
href3="https://hooperos.com/article?_id=6014768244a81254b901ff57"
href4="https://hooperos.com/article?_id=6014760e44a81254b901ff56"
href5="https://hooperos.com/article?_id=601475aa44a81254b901ff55"
href6="https://hooperos.com/article?_id=6014754544a81254b901ff54"
href7="https://hooperos.com/article?_id=60146ab144a81254b901ff53"
href8="https://hooperos.com/article?_id=60134b08f5da0759f41479ee"
href9="https://hooperos.com/article?_id=6019bc8e6a57486615252ebe"
href10="https://hooperos.com/article?_id=5ffa9cccfeaebf363eaf659d"
href11="https://hooperos.com/article?_id=6019be436a57486615252ec1"


/>

</div>
</div></div></div>


<Sectiontitle title="Codehub"/>
 <div id="chart" className={styles.topHoopcodes}>
<div className={styles.pageGridDesktop}>
  <div className={styles.pageGridFull}>
  <Codehub href={props.href}/>
  </div>
</div></div>


<div id="tbt">
<Gazzettamia 
href="https://hooperos.com/article?_id=6019cf3e6a57486615252ec2"
label="vintage"
title="Throwback: Dirk Nowitzki Serie Completa Highlights vs Miami (2011 Finals)"
dekk="Dallas Mavericks sorprendio al mundo."
author="Basquiavito"
date="Jan 28, 2021"
/>
 
 

   </div>  


 
 

 


 

<style jsx>
  {`
 #tbt  {
  color: #fde9eb;
 }
 
  
  `}
</style>
  </>
}
