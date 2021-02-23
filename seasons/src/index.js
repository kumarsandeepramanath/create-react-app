import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {

//   return (
//     <div>
//       <div> Hi There</div>
//       <SeasonDisplay></SeasonDisplay>
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude : {this.state.lat}</div>;
    }
    return <div> Loading!!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
