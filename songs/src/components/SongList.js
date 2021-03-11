import React from 'react';
import Song from './Song';

class SongList extends React.Component {
  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <div>
          <Song
            key={song.songTitle}
            title={song.songTitle}
            duration={song.songDuration}
            onSongSelect={this.props.onSongSelect}
          />
        </div>
      );
    });
    return <div>{songs}</div>;
  }
}

export default SongList;
