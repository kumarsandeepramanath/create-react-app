import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      durattion: '4:05',
    },
    {
      title: 'Macarena',
      durattion: '2:23',
    },
    {
      title: 'All Star',
      durattion: '3:41',
    },
    {
      title: 'Back Street Boys',
      durattion: '1:28',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
