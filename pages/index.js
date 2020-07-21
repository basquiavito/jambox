import Head from 'next/head'
import Headlines from '../components/units/headlines'
import Charts from '../components/units/charts'
import Homevideo from '../components/units/homevideo'
import Videosub from '../components/units/videoSub'
import Sectiontitle from '../components/units/sectiontitle'
import Sectionsubtitle from '../components/units/sectionsubtitle'
import CodeCharts from '../components/units/codesChart'
export default function Home() {
  return <>
<Head>
<title>Home</title>

</Head>
<div id="container">


<div id="featured">
<div className="pageGrid">
<div className="gridCenter">
  <div className="editorialPlacementContainer">
  <Headlines/>
  </div>

</div>  </div></div><br/>




<div id="charts">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title="Hoopcodes" />
  <Sectionsubtitle subtitle = "Codes of the week" />
<CodeCharts />
</div></div></div>
     

<div id="video">
<div className="pageGrid">
<div className="gridCenter">
<Homevideo/>
<Videosub/>
</div></div></div>

<div id="Top Ten">
<div className="pageGrid">
<div className="gridCenter">
<Sectiontitle title="Now" />
  <Sectionsubtitle subtitle = "Latest Plays" />
<Charts />
 
</div></div></div>


      </div>
        
     <style jsx>



       {`
#featured {
  background-color: rgb(255, 255, 255);
  padding: 2.25rem 0px 0px;

}
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
       
       .editorialPlacementContainer{
        color: rgb(0, 0, 0);
        font-weight: 100;
        line-height: 1.125;
        height: 100%;
        min-height: inherit;
       }
       
       `}
     </style>
  </>
}
