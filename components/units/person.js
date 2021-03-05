const person = (props) => {
    return <>
<div className="profile">
    <p >name: {props.name}</p>
    <p>team: {props.team}</p>
    <p>position: {props.pos}</p>
</div>

<style jsx>
    {`
    .profile {
        display: inline-block;
        text-align: center;
        margin-top:3rem;
        text-transform: uppercase;
        bordeR: 2px solid green;
        margin-left: 23rem;
        margin-bottom: 3rem;
        padding: 1.23rem;

        
    }
    `}
</style>
    </>
}

export default person