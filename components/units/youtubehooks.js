import Head from 'next/head'
import React, { useState } from 'react';
import YouTube from '../../utils/youtube'
 
 
 
export default function Youtubehooks(props) {
  const videoIdA = `${props.videoIdA}`;
  const videoIdB = `${props.videoIdB}`
  const name =`${props.name}`
  const [videoId, setVideoId] = useState(videoIdA);
  const [player, setPlayer] = useState(null);
 
  const onReady = (event) => {
    // eslint-disable-next-line
 
    setPlayer(event.target);
  };
 
  const onPlayVideo = () => {
    player.playVideo();
  };
 
  const onPauseVideo = () => {
    player.pauseVideo();
  };
 
  const onChangeVideo = () => {
    setVideoId(videoId === videoIdA ? videoIdB  :  videoIdA   );
  };
 
  return (
    <> 
      <Head>
        <title>{` My Days in Highschool | ${name} |Hoopers Highschool }`}</title>
      </Head>
       
        <div id="videotube">
      <YouTube videoId={videoId} onReady={onReady} />
      <button type="button" onClick={onPlayVideo} disabled={!player}>
        Play 
      </button>
      <button type="button" onClick={onPauseVideo} disabled={!player}>
        Pause
      </button>
      <button type="button" onClick={onChangeVideo} disabled={!player}>
next
      </button>
        </div>

      <style jsx>
{`
 
.pageGrid {
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    grid-template-columns: [grid-start] minmax(36px, 1fr) [center-start] minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) 20px minmax(24px, 100px) [center-end] minmax(36px, 1fr) [grid-end];
    grid-row-gap: 30px;
}

.gridCenter {
    grid-column: center-start / center-end;
}
button {
 
    width:100px; 
     color:#fff; ;
     overflow-wrap: break-word;
     word-break: break-word;
     background-color: transparent;
     cursor: pointer;
     display: inline-block;
     font-family: Programme, sans-serif;
     font-size: 0.875rem;
     line-height: 1;
     text-align: center;
     vertical-align: top;
     user-select: none;
     -webkit-appearance: none;
     text-transform: uppercase;
     letter-spacing: 1px;
 border: 1px solid transparent;
      
 
 
     border-radius: 0px;
     margin: 0px;
     padding: 0.75rem 1.313rem;
}
 
`}
      </style>
    </>
  );
}
 
