import Plant from './Plant';
import React from 'react';

const Plants = React.createClass({
  render() {
    return <ul>
      { this.props.plants.map((plant, index) => {
        return <Plant
          key={index}
          plant={plant}
        />;
      }) }
    </ul>;
  }
});

export default Plants;
