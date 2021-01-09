

const ytCard = (props) => {
    return <>
<div className="ytThumb">
<picture>
    <figure>
        <img width="100%" src="">
        </img>
    </figure>
</picture>


<div className="rightSide">

</div>
</div>

<style jsx>
    {`
   .ytThumb{
       display: flex;
 
        width:100%;
        height:191px;
    }
    picture {
        width: 50%;
        background: blue;
        border-right: 2px solid white;
    }
    .rightSide {
        width: 100%;
        background: green;
       float: right;
       padding: 0;
       margin: 0;
       background-image: url('https://img.youtube.com/vi/-ThDqz_ecBY/maxresdefault.jpg');
    }

    img {
        width: 100%;
    }
    `}
</style>
    </>
}

export default ytCard