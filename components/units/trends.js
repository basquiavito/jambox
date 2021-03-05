const trend = (props) => {
    return <>
<div className="trending">
<div className="textCenter">
<span className="black">
          <b>{props.A}</b>
        </span>
        <b>{props.B}</b>
</div>

</div>
<hr/>
<style jsx>
{`

b  {
    font-weight: bold;
    
}
.textCenter {
    color: rgb(228, 18, 36);
    letter-spacing: -1px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: -15px;
    margin-left: -15px;
    text-align: center;
    text-transform: uppercase;

}

.textCenter:before {
    display: table;
    content: "";
}
.textCenter:after {
    clear: both;
}
.black {
    color:  rgb(226, 226, 226);
    margin-right: 5px;
}
hr {
    margin-top: 5px;
    margin-bottom: 5px;
    border: 0;
    border-top: 1px solid #eee;

        height: 0;
     
}
`}


</style>
    </>
}

export default trend