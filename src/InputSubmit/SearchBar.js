import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
  }

  handleSearchTermChange(event) {
    this.props.onSearchTermChange(event.target.value);
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    // Is this the best way to get the textbox value?
    // this.props.onSearchTermSubmit(event.target[0].value);

    // Using refs:
    // this.props.onSearchTermSubmit(this.textInput.value);

    this.props.onSearchTermSubmit();
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSearchTermSubmit}>
          {/* <input type="text" /> */}
          {/* <input type="text" ref={(input) => this.textInput = input} /> */}
          <input type="text" onChange={this.handleSearchTermChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
