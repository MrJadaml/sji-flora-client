import Plant from './Plant';
import React from 'react';

const Plants = React.createClass({
  getInitialState() {
    return {
      plants: [
        { sci_name: 'Zigadenus venenosus', common_name: 'Meadow death camas', family_name: 'Liliaceae', is_native: false },
        { sci_name: 'Zostera marina', common_name: 'Wide-blade eelgrass', family_name: 'Zosteraceae', is_native: false }
      ]
    };
  },
  render() {
    return <ul>
      { this.state.plants.map((plant, index) => {
        return <Plant
          key={index}
          plant={plant}
        />;
      }) }
    </ul>;
  }
});

export default Plants;
