import Image from 'next/image'


export default function latest(){
    return <>
<div id="">
<article className="hpStory">
<figure className="hpFig">
<a href="" target="_blank" rel="noopener" className="hpLink">
<Image
src="https://res.cloudinary.com/www-hoopscript-com/image/upload/v1611331137/kyrie_johgsy.jpg"
alt={`A photo of `}
width="283px"
height="223px"
className="hpImage"
/>
<h3 className="hpTit">
Joe e Jill Biden, un giro nella loro "nuova" Casa Bianca   
</h3>
</a>
</figure>

</article>


</div>
<style jsx>
{`
@media (min-width: 1201){
.hpTit {
    height: 6.375rem;
    font-size: 1.7rem;
 }}

@media (max-width: 1200){
    .hpTit {
        height: 7.125rem;
        font-weight: 700;
        font-size: 1.9rem;
        line-height: 1.25;
     }}
    
    .hpTit  {
        overflow: hidden; 
        transition: color .33s cubic-bezier(.55,0,.1,1);
    }





.hpImage {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    object-fit: cover;  
}
.hpfig a:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    padding-top: 56.25%; 
}
a {
    background-color: transparent;
    display: block;
    color: inherit;
    text-decoration: none; 
}
.hpfig a {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
@media (min-width: 85.375em){
.hpFig {
    margin: 0 0 1.1rem;
}}

@media (min-width: 64em){
    .hpFig {
        margin: 0 0 1.05rem;
    }}
    
hpfig {
    position: relative;
}




@media (min-width: 85.375em){
.hpStory {
    margin: 0 0 1.1rem;
    padding: 0 2rem;
}}

@media (min-width: 64em)
.hpStory {
    margin: 0 0 1.4rem;
    padding: 0 2rem;
}

.hpStory {
    position: relative;
    box-sizing: border-box;
 
}

`}    
</style>
    </>

}