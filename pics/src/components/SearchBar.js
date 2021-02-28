import React from 'react';

class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  state = { term: '' };

  //   onInputClick() {
  //     console.log('Input was clicked');
  //   }
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* <form className="ui form" onSubmit={(event) =>this.onFormSubmit(event)}>  another version   */}
          <div className="field">
            <label> Image Search</label>
            {/* <input type="text" onChange={this.onInputChange}></input> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
            {/* <input
              type="text"
              onChange={(e) => console.log(e.target.value)}
            ></input> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
