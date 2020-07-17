

import Label from './label'
import Title from './title'
import Video from './video'






function videounit(props){
    return(
        <>
<Label   label="Assists highlights" />
<Video videoId={props.videoId}  placeholder={props.videoId}/>
<Title  title={` ${props.lastname} Passing Skills`} /><br/>

        </>
    )
}


export default videounit

