import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: '' };
  componentDidMount() {
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });

    // console.log(response.data.items);
  };
  onVideoSelect = (video) => {
    // console.log('Video selected' + video.snippet.description);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
