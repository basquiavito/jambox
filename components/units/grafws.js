const graf = (props) => {
    return <>
 <div className="separator"></div>
<table width="100%">
        <tbody><tr>
          <td>
            <center>
              <span className="grayText">
                <strong><time className="date" datetime="2020-12-26">Uploaded {props.date}</time></strong><br/>
              {props.graf}
              </span>
            </center>
          </td>
        </tr>
      </tbody></table><hr/>
<style jsx>
{`
.date {
    color: black;
}
.grayText {
    line-height: 1.5;
    font-size: 14px;
    color: #666;
    font-weight: 300px; 
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
box-sizing: border-box;
table {
    border-collapse: collapse;
}
.separator {
    word-wrap: break-word;
      border-bottom: 1px solid #ccc;
      display: block;
      padding-top: 7px;
      padding-bottom: 7px;
      word-wrap: break-word;
  }


`}


</style>
    </> 

}


export default graf