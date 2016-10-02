import React from 'react';

const Search = React.createClass({
  handleFilter() {
    this.props.filterPlants(this.refs.search.value);
  },
  render() {
    return (
      <div>
        <input
          autoFocus="true"
          onChange={this.handleFilter}
          ref="search"
          type="text"
        />
      </div>
    );
  }
});

export default Search;
