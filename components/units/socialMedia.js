const sm = (props) => {
    return <>

<div role="toolbar" 
aria-label="Social Media Share buttons, Save button, and Comments Panel with current comment count" 
className="smContainer">
<ul className="listHolder">

<li className="fbShareItem">
<a className="twitter-share-button"   
href="" rel="nofollow noopener" target="_blank" 
  aria-label="Share on twitter">
<svg className="fbIcon" viewBox="0 0 7 15" width="7" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.775 14.163V7.08h1.923l.255-2.441H4.775l.004-1.222c0-.636.06-.977.958-.977H6.94V0H5.016c-2.31 0-3.123 1.184-3.123 3.175V4.64H.453v2.44h1.44v7.083h2.882z" fill="#000"></path></svg></a></li>


<li className="twitterShareItem">
<a className="twitter-share-button"   
href={`https://twitter.com/intent/tweet/?url=https://hoopscript.com/post/${props.id}`} rel="nofollow noopener" target="_blank" 
  aria-label="Share on twitter">
<svg viewBox="0 0 13 10" 
className="twIcon" width="13" height="10">
    <path fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M5.987 2.772l.025.425-.429-.052c-1.562-.2-2.927-.876-4.086-2.011L.93.571.784.987c-.309.927-.111 1.906.533 2.565.343.364.266.416-.327.2-.206-.07-.386-.122-.403-.096-.06.06.146.85.309 1.161.223.434.678.858 1.176 1.11l.42.199-.497.009c-.481 0-.498.008-.447.19.172.564.85 1.162 1.606 1.422l.532.182-.464.277a4.833 4.833 0 0 1-2.3.641c-.387.009-.704.044-.704.07 0 .086 1.047.572 1.657.762 1.828.564 4 .32 5.631-.641 1.159-.685 2.318-2.045 2.859-3.363.292-.702.583-1.984.583-2.6 0-.398.026-.45.507-.927.283-.277.55-.58.6-.667.087-.165.078-.165-.36-.018-.73.26-.832.226-.472-.164.266-.278.584-.78.584-.928 0-.026-.129.018-.275.096a4.79 4.79 0 0 1-.755.294l-.464.148-.42-.286C9.66.467 9.335.293 9.163.24 8.725.12 8.055.137 7.66.276c-1.074.39-1.752 1.395-1.674 2.496z" fill="#000"></path></svg></a></li>
    
<li className="emailShareItem">
<a href={""} target="_blank" rel="noopener noreferrer" aria-label="Email"><svg viewBox="0 0 15 9" 
className="emailIcon" width="15" height="9"><path fill-rule="evenodd" clip-rule="evenodd" d="M.906 8.418V0L5.64 4.76.906 8.419zm13 0L9.174 4.761 13.906 0v8.418zM7.407 6.539l-1.13-1.137L.907 9h13l-5.37-3.598-1.13 1.137zM1.297 0h12.22l-6.11 5.095L1.297 0z" fill="#000"></path></svg></a></li>

 



</ul></div>

<style>
{`

.moreShareIcon {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 15px;
    height: 15px;
 
}
.moreSharing:hover {
    background-color: #fff;
    border: 1px solid #ccc;   
}
button {
cursor: pointer;
}
.moreSharing {
 
    display: inline-block;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px #eee solid;
    border-radius: 100%;
    padding: 5px;
    width: 27px;
    height: 27px;
}
.moreContainer {
    display: inline;  
}
.fbIcon, .twIcon, .emailIcon, .moreShareIcon {
    display: inline-block;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 100%;
    padding: 5px;
    width: 35px;
    height: 35px;
} 
a {
    text-decoration: none;
    color:#e41224;
}

.fbShareItem {
    text-decoration: none;
}
.fbShareItem, .twitterShareItem, .emailShareItem , .moreShareItem{
    color: #999;
    display: inline;
    margin-right: 16px;
    width: 100%;   
}
.listHolder {
    padding: 0; 
}
ol, ul {
    list-style: none;
}
.smContainer {
    color: #999;
    display: flex;
    flex-shrink: 0;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-size: 17px;
    margin-bottom: 5px
    flex-flow: row nowrap;
    justify-content: center;
}

`}
</style>
    </>
}

export default sm