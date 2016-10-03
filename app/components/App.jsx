import Plants from './Plants';
import React from 'react';
import Search from './Search';
import axios from 'axios';

const App = React.createClass({
  getInitialState() {
    return {
      plants: [],
      plantsSearch: []
    };
  },
  componentWillMount() {
    this.setState({ plantsSearch: this.state.plants });
  },
  componentDidMount() {
    this.serverRequest = axios.get('http://localhost:8001/api/plants')
      .then((plantsData) => {
        this.setState({
          plants: plantsData.data,
          plantsSearch: plantsData.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  filterPlants(searchVal = '') {
    const search = searchVal.toLowerCase().trim();

    if (search === '') {
      this.setState({ plantsSearch: this.state.plants });
    }

    const updatedPlants = this.state.plants.filter((item) => {
      for (const prop in item) {
        const stringVal = item[prop].toString().toLowerCase();

        if (stringVal.indexOf(search) !== -1) {
          return true;
        }
      }
      return false;
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
