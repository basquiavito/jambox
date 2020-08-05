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
  article{
    font-family: "Roboto",sans-serif;
    font-size: 18px;
    text-align: left;
    padding: 15px 25px 0;
         
    }
    p {
        line-height: 1.6;
    text-rendering: optimizeLegibility;
   
    
 font-weight: 300;
        margin: 0 0 .75em;
   
    }
    `}
</style>
    </>
}