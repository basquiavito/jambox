import Head from 'next/head'
import Headlines from '../components/units/headlines'
import Charts from '../components/units/charts'
import Homevideo from '../components/units/homevideo'
import Videosub from '../components/units/videoSub'

export default function Home() {
  return <>
    <div id="container">
      <Head>
        <title>Home</title>
    
      </Head>
<div id="">
<div className="pageGrid">
<div className="gridCenter">
<Headlines/>
</div>  </div></div><br/>




<div id="charts">
<div className="pageGrid">
<div className="gridCenter">
<Charts />
</div></div></div>
     

<div id="video">
<div className="pageGrid">
<div className="gridCenter">
<Homevideo/>
<Videosub/>
</div></div></div>


      </div>
        
     <style jsx>



       {`

       #video {

        background-color: rgb(18, 18, 18);
    padding: 2.25rem 0px;
    color: #fff;
       }
       
       .pageGrid{
        display: grid;
        -webkit-box-pack: center;
        justify-content: center;
        grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
        grid-row-gap: 30px;
        
    
    }
       .gridCenter{
          grid-column: center-start / center-end;
       }
       
       
       
       `}
     </style>
  </>
}
