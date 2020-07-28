import Link from 'next/link'

export default function parrafo(props){
    return<>
    <div>
<p>
{props.p1}
</p><br/>

<p>
{props.p2}
</p><br/>

<p>
{props.p3}
</p><br/>

<p>
{props.p4}
</p><br/>

<p>
{props.p5}
</p><br/>


<p>
{props.p6}
</p><br/>


<p>
{props.p7}
</p><br/>
</div>
<style jsx>
    {
        `
        blockquote {
            display: block;
            padding-left: 2.25rem;
            position: relative;
        }
        div {
            margin: 2.25rem auto;
    max-width: 100%;

        }
        
        
        `
    }
</style>
    </>

}