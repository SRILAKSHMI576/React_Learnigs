/*
function SearchResult(props) {
  return <p>Search term: {props.searchTerm}</p>;
}
*/
import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";

class Srilakshmi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", search: false };
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(searchTerm) {
    this.setState({ searchTerm, search: false });
  }

  handleSearchTermSubmit() {
    this.setState({ search: true });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearchTermChange}
          onSearchTermSubmit={this.handleSearchTermSubmit}
        />
        <SearchResult
          searchTerm={this.state.searchTerm}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default Srilakshmi;
