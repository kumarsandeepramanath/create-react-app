import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';
import MyDocument from './PdfDownloader';
import { PDFDownloadLink } from '@react-pdf/renderer';
const songs = [
  {
    songTitle: 'A  walk to remember',
    songDuration: '05:04',
  },
  {
    songTitle: 'A  superhero to see',
    songDuration: '12:01',
  },
  {
    songTitle: 'A  legend with a skill',
    songDuration: '06:07',
  },
];

class App extends React.Component {
  state = { selectedSongTitle: '', selectedSongDuration: '' };
  onSongSelect = (songTitle, songDuration) => {
    console.log(
      `Song title is ${songTitle} and the duration is ${songDuration}`
    );
    this.setState({
      selectedSongTitle: songTitle,
      selectedSongDuration: songDuration,
    });
  };

  render() {
    return (
      <div>
        <SongList songs={songs} onSongSelect={this.onSongSelect} />
        <SongDetail
          songTitle={this.state.selectedSongTitle}
          songDuration={this.state.selectedSongDuration}
        />
        {/* <MyDocument /> */}
        {/* <PDFDownloadLink>
          <MyDocument />
        </PDFDownloadLink> */}
        <PDFDownloadLink document={<MyDocument />} fileName="Norms.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
    );
  }
}

export default App;
