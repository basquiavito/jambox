import StudyVideo from '../../components/units/studyVideo'
import Tooltip from '../../components/units/tooltip'
import TooltipTrigger from 'react-popper-tooltip';
import TimeAgo from 'react-timeago'
const negro={
    color: '#000',
    fontWeight: '500'
  }
  
  
  const fzise = {
    fontSize:'1.875rem',
   
  }
  


export default function tooltipOk(props){
    const tooltip = (
        <TooltipTrigger>
          {trigger => <div>
      <StudyVideo ttTitle={props.ttTitle} videoID={props.videoID} comment={props.cotorra} />
      </div>}
        </TooltipTrigger>
        
      );
    return <>

<ul className="linkBucket"> 

<li>
<div>
<Tooltip placement="bottom" closeOnReferenceHidden={false} trigger="click" 
tooltip={tooltip}>
<h4 className="subLinkTitle">
<a href="" className="subLinkLink" >
<span className="subLinkKicker"> {props.name}    <span  style={negro} > {props.details} </span>    </span>
<div><TimeAgo date={props.publishedAt}/></div>
</a>
</h4>
</Tooltip>
</div>
</li>

</ul>

<style>
{`

.subLinkKicker {
    color: #000;
    
  }
  .subLinkLink , .subLinkKicker {
    float: left;
    
      font-weight: 700;
  }
  .subLinkLink a{
    display: block;
    z-index: 1 !important;
    
  }
   a {
    cursor: pointer;
    text-decoration: none;
    background: transparent;
    touch-action: manipulation;
   }
  .subLinkTitle:before {
    display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 7.625rem;
      border-top: 0.0625rem solid #dcdcdc;
  }
  
  .subLinkTitle {
    font-size: 1.1rem;
    line-height: 1.0625rem;
    font-family: Georgia,serif;
    color: #121212;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
    li {
      position: relative;
      padding-top: 0.1875rem;
      margin-bottom: 16px;
    }
   .linkBucket {
     text-align: center;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
 
   }


`}
</style>
    </>
}