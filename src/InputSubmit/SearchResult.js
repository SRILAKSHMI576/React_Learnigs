import React from "react";

class SearchResult extends React.Component {
  render() {
    return <p>Search term: {this.props.searchTerm}</p>;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.search;
  }
}

export default SearchResult;
