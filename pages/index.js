import Head from 'next/head'
import Headlines from '../components/units/headlines'
import Coderow from '../components/units/coderow'
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
<Coderow rank="1" codeTitle="Lamelo Ball beastin" hoopcodes="013 013 180" />
<Coderow rank="2" codeTitle="Lamelo Ball beastin" hoopcodes="013 013 180" />
<Coderow rank="3" codeTitle="Lamelo Ball beastin" hoopcodes="013 013 180" />
<Coderow rank="4" codeTitle="Lamelo Ball beastin" hoopcodes="013 013 180" />
<Coderow rank="5" codeTitle="Lamelo Ball beastin" hoopcodes="013 013 180" />
</div></div></div>



     
      </div>
        
     <style jsx>



       {`
       
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
