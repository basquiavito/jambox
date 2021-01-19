



function authordate(props){
    return(
        <>
    <div className="authordate">
    <span className="editorialAuthor"> by {props.author} / </span>
    <span className="editorialPublishedAt"> {props.date}</span>
    <style jsx>{`
    .editorialAuthor{
        font-size: 0.75rem;
    }
    .editorialPublishedAt{
        font-size: 0.75rem; 
        color:rgb(154, 154, 154);
    }
 
    .authordate {
        margin-bottom: 1rem;
    }
    `}</style>
    
            </div>
        </>)
    }
    
    export default authordate

