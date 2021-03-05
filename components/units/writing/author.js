const author = (props) => {
    return <>
<div className="container">
<div className="row">
<div className="authorImageContainer">
<a href="" className="authorLink">
<img width="50px" height= '50px'className="imageLink" src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1612985537/Screen_Shot_2021-02-10_at_2.31.42_PM_khkbbl.png"/>
</a>
</div>
<div className="authorNameDetails">
<p className="authorName">
     <span className="by"> By</span>
    <a href="" className="authorDirectLink">
<span className="nameString">
{props.author}
</span>
    </a>
</p>
</div>
</div>





</div>
<style jsx>
{`
.clock {
    white-space: nowrap;
}
.timeDetails {
    display: inline-block;
    margin-left: 0;
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
.dateContainer {
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0;
    flex-wrap: nowrap;
}
.by {
    margin-left: 10px;
    margin-right: 5px;
}
.nameString {
    text-decoration: underline;
    -webkit-text-decoration-color: #ccc;
    text-decoration-color: #ccc;
    display: inline-block;
}
.authorDirectLink {
    text-decoration: none;
    display: inline;
    color: #333;
}
.authorName {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin: 0;
    font-family: nyt-franklin,helvetica,arial,sans-serif;
    font-weight: 700;
    color: #333;
}
.authorNameDetails {
    display: inline-block;
}
.imageLink {
    border-radius: 50%;
}
.authorLink {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
}
.authorImageContainer {
    min-width: 50px;
    display: inline-block;
    margin-left: -3px;
}

.row {
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
    -webkit-box-align: center;
    display: flex;
}
.container {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
    max-width: 600px;
   
}



`}    
</style>
    </>
}

export default author