export default function content(props){
    return<>
<section>
    <article>
        <p>{props.contentA}</p>
        <p>{props.contentB}</p>
        <p>{props.contentC}</p>
        <p>{props.contentD}</p>
    </article>
</section>

<style jsx>


    {`
    p {
        line-height: 1.5;
        font-size: 18px;
        font-family: serif;
        letter-spacing:
    }
    
    `}
</style>
    </>
}