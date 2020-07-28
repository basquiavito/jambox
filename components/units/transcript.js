 
export default function transcript(props){
    return<>

<div className="transcriptContainer">
<div className="transcriptHeader">
<h2>Transcript</h2>
    </div>

    <div className="transcriptWrapper">
<div className="videoTranscript">

<div className="transcriptRow">
<div className="transcriptTime">{props.code}</div>
<div className="transcriptText">
{props.description}</div>
</div><br/>


<div className="transcriptRow">
<div className="transcriptTime">{props.code1}</div>
<div className="transcriptText">
{props.description1}</div>
</div>

</div>



    </div>

</div>


<style jsx>{`
.transcriptContainer{
    border: thin solid #999;
    border-radius: 1px;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    color: #fff;
    font-style: normal;
    font-family: 'Arial';
}

.transcriptHeader{
    font-weight: bold;
    padding-bottom: 10px;
}

h2 { 
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
}


.transcriptWrapper{
    overflow-y: scroll;
    width: 100%;
    max-height: 200px;
}

.videoTranscript{
    display: table;
}

.transcriptRow{
display: table-row;
}

.transcriptTime{
    display: table-cell;
    text-align: right;
    line-height: 20px;
    color: #999;
}

.transcriptText{
    display: table-cell;
    padding-left: 30px;
    padding-right: 25px;
    line-height: 20px;
}


`}


</style>
    </>
}