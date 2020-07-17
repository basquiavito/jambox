import React from 'react'
import { Embed } from 'semantic-ui-react'
 

const dvideo = (props) => (
  <Embed
    id={props.videoId}
    placeholder={props.placeholder}
    source='youtube'
  />
)

export default dvideo