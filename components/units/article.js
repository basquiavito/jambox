



const article = (props) => {
    return <>

<section className="theAthletic">
 
<a href={props.articleLink}>
<blockquote cite={props.articleLink}>
<p>{props.content}</p>
<footer>{props.author}, <cite> {props.articleHead}</cite> | <span>{props.articleDate}</span></footer>
</blockquote></a>

 


<style jsx>
    {
        `
        .theAthletic{
            background: #eee;
            padding: 1em;
            margin: 1em;
        }
        
        blockquote {
            margin: 0;
        }
        
        blockquote p {
            padding: 15px;
            background: #eee;
            border-radius: 5px;
        }
  
        
        
        
        
        
        `
    }
</style>

</section>

    </>
}



export default article