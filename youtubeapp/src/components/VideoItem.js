import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  playVideo = (video) => {
    // console.log(video.snippet.title);
    this.props.onVideoSelect(video);
  };
  render() {
    return (
      <div>
        <div
          className="video-item item"
          style={{ marginBottom: '5px' }}
          //   onClick={(e) => this.playVideo(this.props.video)}
          onClick={(e) => this.props.onVideoSelect(this.props.video)}
        >
          <img
            className="ui image"
            alt={this.props.video.snippet.title}
            src={this.props.video.snippet.thumbnails.medium.url}
          ></img>
          <div className="content">
            <div className="header">{this.props.video.snippet.title}</div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default VideoItem;
