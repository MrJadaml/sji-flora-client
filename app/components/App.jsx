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
      plants: [
        { sci_name: 'Zigadenus venenosus', common_name: 'Meadow death camas', family_name: 'Liliaceae', is_native: false },
        { sci_name: 'Zostera marina', common_name: 'Wide-blade eelgrass', family_name: 'Zosteraceae', is_native: false }
      ],
      plantsSearch: []
    };
  },
  componentWillMount() {
    this.setState({ plantsSearch: this.state.plants });
  },
  filterPlants(searchVal = '') {
    const search = searchVal.toLowerCase().trim();

    if (search === '') {
      return this.state.plants;
    }

    const updatedPlants = this.state.plants.filter((item) => {
      for (const prop in item) {
        const stringVal = item[prop].toString().toLowerCase();

        if (stringVal.indexOf(search) !== -1) {
          return item;
        }
      }
    });

    this.setState({ plantsSearch: updatedPlants });
  },
  render() {
    return (
      <div>
        <Search filterPlants={this.filterPlants} />
        <Plants plants={this.state.plantsSearch} />
      </div>
    );
  }
});

export default App;
