const date = (props) => {
    return <>

 
<time className="timeDetails">
{props.date}  <span className="clock">
{props.time}
</span>
</time>
 

<style jsx>
    {`
    
    .clock {
        white-space: nowrap;
    }
    .timeDetails {
        display: inline-block;
        margin-left: 20px;
        margin-top: 0;
        margin-bottom: 0;
        width: auto;
        font-size: 0.8125rem;
        line-height: 1rem;
        font-family: nyt-franklin,helvetica,arial,sans-serif;
        font-weight: 500;
        color: #333;
    }
    .listContainer {
        flex-shrink: 1;
        padding-right: 1rem;
        list-style: none;
    }
    ol, ul {
        list-style: none;
    }
    
    `}
</style>
    </>
}

export default date