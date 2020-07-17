import React from 'react'
import Title from './title'
import Dekk from './dekk'
import AuthorDate from './authorDate'
import MediaUrlFull from './mediaUrlFull'
import Label from './label'




const subeditorial = (props) => {
    return(
        <div>
   <Label label="Hoopcodes" />              
<MediaUrlFull mediaUrl={props.mediaUrl}/>
<Title title={props.title}/>
<AuthorDate author={props.author} date={props.date}/>

        </div>
    )
}
 
export default subeditorial