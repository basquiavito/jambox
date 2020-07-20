import Head from 'next/head'
 import Headlines from '../components/units/headlines'
export default function Home() {
  return <>
    <div className="container">
      <Head>
        <title>Home</title>
    
      </Head>
<div id="">
  <div className="pageGrid">
    <div className="gridCenter">
    <Headlines/>
    </div>
  </div>

</div>




     
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
