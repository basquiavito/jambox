const graf = (props) => {
    return <>
 <div className="separator"></div>
<table width="100%">
        <tbody><tr>
          <td>
            <center>
              <h2 className="grayText">
                <strong><time className="date" datetime="2020-12-26">Uploaded {props.date}</time></strong><br/>
              {props.graf}
              </h2>
            </center>
          </td>
        </tr>
      </tbody></table><hr/>
<style jsx>
{`
.date {
    color: rgb(255 255 255);
}
.grayText {
  font-size: 1.125rem;
    line-height: 1.625rem;
    font-weight: 300;
    color: rgb(226, 226, 226);
  
    vertical-align: baseline;
    letter-spacing: 0.0125rem;
    font-family: nyt-franklin, helvetica, arial, sans-serif;
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