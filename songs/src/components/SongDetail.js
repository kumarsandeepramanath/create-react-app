import React from 'react';

class SongDetail extends React.Component {
  render() {
    const songTitle = this.props.songTitle;
    const songDuration = this.props.songDuration;
    return (
      <div>
        <h1> {songTitle.length > 0 ? `Song title is  - ${songTitle}` : ''}</h1>
        <h1>
          {' '}
          {songDuration.length > 0 ? `Song Duration is - ${songDuration}` : ''}
        </h1>
      </div>
    );
  }
}

export default SongDetail;
