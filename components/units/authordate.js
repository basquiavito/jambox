



function authordate(props){
    return(
        <>
    <div className="authordate">
    
    <span className="editorialPublishedAt"> {props.date}</span>
    <style jsx>{`
    .editorialAuthor{
        font-size: 1rem;
    }
    .editorialPublishedAt{
        font-size: 1rem; 
        color:rgb(154, 154, 154);
    }
 
    
    `}</style>
    
            </div>
        </>)
    }
    
    export default authordate

