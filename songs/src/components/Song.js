import React from 'react';

class Song extends React.Component {
  state = { selectedSong: '' };

  selectSong = (title, duration) => {
    this.props.onSongSelect(title, duration);
  };
  render() {
    return (
      <div>
        <div>
          <h2> Song title is : {this.props.title}</h2>
          <h3> Song Duration is : {this.props.duration}</h3>
          <button
            onClick={() =>
              //   this.selectSong(this.props.title, this.props.duration)
              this.props.onSongSelect(this.props.title, this.props.duration)
            }
          >
            Select Song to play
          </button>
        </div>
      </div>
    );
  }
}

export default Song;
