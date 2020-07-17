import React from 'react'

function instruction(title, steps){
    return <>
<section className="instruction">
    <h2>{title}</h2>
    {steps.map((s, 1) =(
        <p key={i}>{s}</p>
    ))}
</section>
    </>


}

export default instruction