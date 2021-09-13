import React from 'react';

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div> Loading...</div>;
    } else {
      // console.log(this.props.video?.snippet?.description);
      const videoSrc = `http://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <div>
          <div className="ui embed">
            <iframe title="Video Player" src={videoSrc}></iframe>
          </div>
          <div className="ui segment">
            <h4 className="ui header">{this.props.video.snippet.title}</h4>
            <p>{this.props.video.snippet.description}</p>
          </div>
        </div>
      );
    }
  }
}

export default VideoDetail;
