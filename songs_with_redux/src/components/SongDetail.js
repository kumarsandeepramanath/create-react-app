import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div> Please select a song</div>;
  }
  return (
    <div>
      <h3>{song.title}</h3>
      <h3>{song.durattion}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};
export default connect(mapStateToProps)(SongDetail);
