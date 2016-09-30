import Plants from './Plants';
import React from 'react';
import Search from './Search';

const App = React.createClass({
  getDefaultProps() {
    return {
      url: 'http://omdbapi.com?t='
    };
  },
  getInitialState() {
    return {
      data: {}
    };
  },
  filterPlants(searchVal) {
    console.log(searchVal);
  },
  render() {
    return (
      <div>
        <Search filterPlants={this.filterPlants} />
        <Plants />
      </div>
    );
  }
});

export default App;
