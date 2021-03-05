



function authordate(props){
    return(
        <>
    <div className="authordate">
    <span className="editorialAuthor"> by {props.author} /  </span> <span className="editorialPublishedAt"> {props.date}</span>
    <style jsx>{`
    .editorialAuthor{
        font-size: 1rem;
        display: inline-block;
         
        color: #333;
        display: inline;
    }
    .editorialPublishedAt{
        font-size: 0.75rem; 
        color:rgb(154, 154, 154);
    }
 
    .authordate {
        margin-bottom: 1rem;
        padding-left:20px;
        text-
    }
    `}</style>
    
            </div>
        </>)
    }
    
    export default authordate

