import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    const renderedList = this.props.videos.map((video) => {
      return (
        <div>
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={this.props.onVideoSelect}
          ></VideoItem>
        </div>
      );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default VideoList;
