const dekk = (props) => {
    return <>
 
    <div className="dekk">
        <p>{props.dekk}</p>
    </div>
 
<style jsx>
 {`
 p {
    font-feature-settings: 'kern';
padding-top: 2.5rem;
padding-bottom: 2.5rem;
max-width: 1600px;
--type-token-name: consumptionEditorial.body-core;
line-height: 25px;
letter-spacing: normal;
font-family: Georgia,helvetica,sans-serif;
font-size: 18px;
font-weight: 500;
font-style: normal;
text-transform: none;
padding: 0;
color: #333333;
}
 .dekk {
    font-style: normal;
    font-stretch: normal;
    margin-bottom: 1.25rem;
    text-size-adjust: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: nyt-cheltenham,georgia,'times new roman',times,serif;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5625rem; 
    margin-left: 20px;
    margin-right: 20px;
 }
 
 `}   
</style>

    </>
}

export default dekk