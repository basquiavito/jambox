export default function transcript(){
    return<>

<div className="transcriptContainer">
<div className="transcriptHeader">
<h2>Transcript</h2>
    </div>

    <div className="transcriptWrapper">
<div className="videoTranscript">

<div className="transcriptRow">
<div className="transcriptTime">00:00</div>
<div className="transcriptText">
I think at one point in my career, </div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:07</div>
<div className="transcriptText">
it was like a drug, because literally, </div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:11</div>
<div className="transcriptText">
I doubt he got it</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>


<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>

<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
</div>


<div className="transcriptRow">
<div className="transcriptTime">00:15</div>
<div className="transcriptText">
Ma man, he knows that if i get there...haaa</div>
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