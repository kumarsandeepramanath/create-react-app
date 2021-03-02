import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video}></VideoItem>;
  });
  return (
    <div className="ui relaxed divided list">
      {renderedList}
      {/* {props.videos.length} */}
    </div>
  );
};
export default VideoList;
